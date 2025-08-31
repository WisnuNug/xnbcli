const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const PNG = require('pngjs').PNG;
const Log = require('./Log');
const XnbError = require('./XnbError');

/**
 * Used to save a parsed XNB file.
 * @param {object} xnbObject
 * @returns {Boolean}
 */
const exportFile = (filename, xnbObject) => {

    const dirname = path.dirname(filename);

    const basename = path.basename(filename, '.json');


    if (!fs.existsSync(dirname))
        mkdirp.sync(dirname);

 
    if (!xnbObject.hasOwnProperty('content'))
        throw new XnbError('Invalid object!');

 
    const content = xnbObject.content;
    const found = search(content, 'export');

 
    if (found) {
        const keyPath = found.path;
        const exported = found.value;

        if (exported == undefined || exported.type == undefined || exported.data == undefined)
            throw new XnbError('Invalid file export!');

    
        Log.info(`Exporting ${exported.type} ...`);

        let buffer = exported.data;

        let extension = 'bin';

       
        const foundContent = (keyPath.length ? content[keyPath] : content);

    
        switch (exported.type) {
            case 'Texture2D':
                buffer = toPNG(
                    exported.width,
                    exported.height,
                    exported.data
                );

                extension = 'png';
                break;

            case 'Effect':
                extension = 'cso';
                break;

            case 'TBin':
                extension = 'tbin';
                break;
            
            case 'BmFont':
                extension = 'xml';
                break;
        }

        const outputFilename = path.resolve(dirname, `${basename}.${extension}`);

  
        fs.writeFileSync(outputFilename, Buffer.from(buffer));

  
        foundContent['export'] = path.basename(outputFilename);
    }

    fs.writeFileSync(filename, JSON.stringify(xnbObject, null, 4));


    return true;
}

exports.exportFile = exportFile;


const resolveImports = filename => {

    const dirname = path.dirname(filename);
    const basename = path.basename(filename);
    const buffer = fs.readFileSync(filename);
    const json = JSON.parse(buffer);

    if (!json.hasOwnProperty('content'))
        throw new XnbError(`${filename} does not have "content".`);

    const content = json.content;
    const found = search(content, 'export');

    if (found) {
        const keyPath = found.path;
        const exported = found.value;

        const foundContent = (keyPath.length ? content[keyPath] : content);

        if (exported == undefined)
            throw new XnbError('Invalid file export!');
        
        const exportedPath = path.join(dirname, exported);
 
        const exportedFile = fs.readFileSync(exportedPath);
   
        const ext = path.extname(exportedPath);

        switch (ext) {
            case '.png':
                const png = fromPNG(exportedFile);
                const data = {
                    data: png.data,
                    width: png.width,
                    height: png.height
                };

                if (keyPath.length)
                    json['content'][keyPath]['export'] = data;
                else
                    json['content']['export'] = data;
                break;

            // Compiled Effects
            case '.cso':
                json['content'] = {
                    type: 'Effect',
                    data: exportedFile
                }
                break;

            // TBin Map
            case '.tbin':
                if (keyPath.length)
                    json['content'][keyPath]['export'] = {
                        type: 'TBin',
                        data: exportedFile
                    };
                else
                    json['content']['export'] = {
                        type: 'TBin',
                        data: exportedFile
                    };
                break;

            
            // BmFont Xml
            case '.xml':
                json['content'] = {
                    type: 'BmFont',
                    data: exportedFile.toString()
                }
                break;
        }   
    }
     
    return json;
}

exports.resolveImports = resolveImports;


const search = (object, key, path = []) => {
    if (!object || typeof object != 'object')
        return;

    if (object.hasOwnProperty(key))
        return { path, value: object[key] };


    for (let [k, v] of entries(object)) {
        if (typeof v == 'object') {
            path.push(k);
            return search(v, key, path);
        }
    }

    return null;
}

function* entries(object) {
    for (let key of Object.keys(object))
        yield [key, object[key]];
}


const toPNG = (width, height, buffer) => {

    const png = new PNG({ width, height, inputHasAlpha: true });

    png.data = buffer

    return PNG.sync.write(png);
}


const fromPNG = data => {
    const png = PNG.sync.read(data);
    return {
        data: png.data,
        width: png.width,
        height: png.height
    };
}
