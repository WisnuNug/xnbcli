const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const SingleReader = require('./SingleReader');

/**
 * Vector4 Reader
 * @class
 * @extends BaseReader
 */
class Vector4Reader extends BaseReader {
    static isTypeOf(type) {
        switch (type) {
            case 'Microsoft.Xna.Framework.Content.Vector4Reader':
            case 'Microsoft.Xna.Framework.Vector4':
                return true;
            default: return false;
        }
    }

    /**
     * Reads Vector4 from buffer.
     * @param {BufferReader} buffer
     * @returns {object}
     */
    read(buffer) {
        const singleReader = new SingleReader();

        let X = singleReader.read(buffer);
        let Y = singleReader.read(buffer);
        let Z = singleReader.read(buffer);
        let W = singleReader.read(buffer);

        return { X, Y, Z, W };
    }

    write(buffer, content, resolver) {
        this.writeIndex(buffer, resolver);
        const singleReader = new SingleReader();
        singleReader.write(buffer, content.X, null);
        singleReader.write(buffer, content.Y, null);
        singleReader.write(buffer, content.Z, null);
        singleReader.write(buffer, content.W, null);
    }
}

module.exports = Vector4Reader;
