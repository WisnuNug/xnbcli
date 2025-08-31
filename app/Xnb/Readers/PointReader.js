const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const ReaderResolver = require('../ReaderResolver');
const Int32Reader = require('./Int32Reader');

 
class PointReader extends BaseReader {
 
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.PointReader':
			case 'Microsoft.Xna.Framework.Point':
				return true;
			default: return false;
		}
	}

	/**
	 * Reads Rectangle from buffer.
	 * @param {BufferReader} buffer
	 * @returns {object}
	 */
	read(buffer) {
		const int32Reader = new Int32Reader();

		const X = int32Reader.read(buffer);
		const Y = int32Reader.read(buffer);

		return { X, Y };
	}

	/**
	 * Writes Effects into the buffer
	 * @param {BufferWriter} buffer
	 * @param {Mixed} data The data
	 * @param {ReaderResolver} resolver
	 */
	write(buffer, content, resolver) {
		this.writeIndex(buffer, resolver);
		const int32Reader = new Int32Reader();
		int32Reader.write(buffer, content.X, null);
		int32Reader.write(buffer, content.Y, null);
	}
}

module.exports = PointReader;
