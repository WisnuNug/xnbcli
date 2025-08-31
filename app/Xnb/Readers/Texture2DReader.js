const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const Int32Reader = require('./Int32Reader');
const UInt32Reader = require('./UInt32Reader');
const dxt = require('../Libs/dxt');
const Log = require('../../Log');
const XnbError = require('../../XnbError');
const { convertTo5551, convertFrom5551 } = require('../libs/bgra5551');

/**
 * Texture2D Reader
 * @class
 * @extends BaseReader
 */
class Texture2DReader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.Texture2DReader':
				return true;
			default: return false;
		}
	}

	/**
	 * Reads Texture2D from buffer.
	 * @param {BufferReader} buffer
	 * @returns {object}
	 */
	read(buffer) {
		const int32Reader = new Int32Reader();
		const uint32Reader = new UInt32Reader();

		let format = int32Reader.read(buffer);
		let width = uint32Reader.read(buffer);
		let height = uint32Reader.read(buffer);
		let mipCount = uint32Reader.read(buffer);
		let usedWidth = null;
		let usedHeight = null;

		if (mipCount > 1)
			console.warn(`Found mipcount of ${mipCount}, only the first will be used.`);

		let dataSize = uint32Reader.read(buffer);

		// for stardew valley 1.5 ios adjustment
		// sdv 1.5 ios img size format is (imgwidth)/(usedWidth)/(imgHeight)/(usedHeight)
		if (width * height * 4 > dataSize) {
			usedWidth = (width >> 16) & 0xffff;
			width = width & 0xffff;
			usedHeight = (height >> 16) & 0xffff;
			height = height & 0xffff;
			if (width * height * 4 !== dataSize) {
				console.warn(`invalid width & height! ${width} x ${height}`);
			}
		}

		let data = buffer.read(dataSize);

		if (format == 4)
			data = dxt.decompress(data, width, height, dxt.flags.DXT1);
		else if (format == 5)
			data = dxt.decompress(data, width, height, dxt.flags.DXT3);
		else if (format == 6)
			data = dxt.decompress(data, width, height, dxt.flags.DXT5);
		else if (format == 2) {
			// format type is bgra5551, not ECT1
			data = convertFrom5551(data);
		}
		else if (format != 0)
			throw new XnbError(`Non-implemented Texture2D format type (${format}) found.`);

		if (data instanceof ArrayBuffer) data = new Uint8Array(data);

		// add the alpha channel into the image
		for (let i = 0; i < data.length; i += 4) {
			let inverseAlpha = 255 / data[i + 3];
			data[i] = Math.min(Math.ceil(data[i] * inverseAlpha), 255);
			data[i + 1] = Math.min(Math.ceil(data[i + 1] * inverseAlpha), 255);
			data[i + 2] = Math.min(Math.ceil(data[i + 2] * inverseAlpha), 255);
		}

		const result = {
			format,
			export: {
				type: this.type,
				data, width, height
			}
		};
		if (usedWidth !== null) result.additional = { usedWidth, usedHeight };

		return result;
	}

	/**
	 * Writes Texture2D into the buffer
	 * @param {BufferWriter} buffer
	 * @param {Mixed} data The data
	 * @param {ReaderResolver} resolver
	 */
	write(buffer, content, resolver) {
		const int32Reader = new Int32Reader();
		const uint32Reader = new UInt32Reader();

		this.writeIndex(buffer, resolver);

		let width = content.export.width;
		let height = content.export.height;
		if (content.additional != null) {
			width = width | (content.additional.usedWidth << 16);
			height = height | (content.additional.usedHeight << 16);
		}

		int32Reader.write(buffer, content.format, null);
		uint32Reader.write(buffer, width, null);
		uint32Reader.write(buffer, height, null);
		uint32Reader.write(buffer, 1, null);

		let data = content.export.data;

		for (let i = 0; i < data.length; i += 4) {
			const alpha = data[i + 3] / 255;
			data[i] = Math.floor(data[i] * alpha);
			data[i + 1] = Math.floor(data[i + 1] * alpha);
			data[i + 2] = Math.floor(data[i + 2] * alpha);
		}

		if (content.format === 4)
			data = dxt.compress(data, width, height, dxt.flags.DXT1);
		else if (content.format === 5)
			data = dxt.compress(data, width, height, dxt.flags.DXT3);
		else if (content.format === 6)
			data = dxt.compress(data, width, height, dxt.flags.DXT5);
		else if (content.format === 2)
			data = convertTo5551(data);

		uint32Reader.write(buffer, data.length, null);
		buffer.concat(data);
	}

	isValueType() {
		return false;
	}
}

module.exports = Texture2DReader;
