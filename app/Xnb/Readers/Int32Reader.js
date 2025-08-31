const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const BufferWriter = require('../../BufferWriter');

/**
 * Int32 Reader
 * @class
 * @extends BaseReader
 */
class Int32Reader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.Int32Reader': 
			case 'System.Int32':
				return true;
			default: return false;
		}
	}

	/**
	 * Reads Int32 from buffer.
	 * @param {BufferReader} buffer
	 * @returns {Number}
	 */
	read(buffer) {
		return buffer.readInt32();
	}

	/**
	 * Writes Int32 and returns buffer
	 * @param {BufferWriter} buffer
	 * @param {Number} content
	 * @param {ReaderResolver} resolver
	 */
	write(buffer, content, resolver) {
		this.writeIndex(buffer, resolver);
		buffer.writeInt32(content);
	}
}

module.exports = Int32Reader;
