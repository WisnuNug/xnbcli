const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');

/**
 * Single Reader
 * @class
 * @extends BaseReader
 */
class SingleReader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.SingleReader':
			case 'System.Single':
				return true;
			default: return false;
		}
	}

	/**
	 * Reads Single from the buffer.
	 * @param {BufferReader} buffer
	 * @returns {Number}
	 */
	read(buffer) {
		const raw = buffer.readSingle();
		return Math.round(raw * 1e6) / 1e6;  
	}


	write(buffer, content, resolver) {
		this.writeIndex(buffer, resolver);
		buffer.writeSingle(content);
	}
}

module.exports = SingleReader;
