const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const Int32Reader = require('./Int32Reader');

/**
 * Rectangle Reader
 * @class
 * @extends BaseReader
 */
class RectangleReader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.RectangleReader':
			case 'Microsoft.Xna.Framework.Rectangle':
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
		const Width = int32Reader.read(buffer);
		const Height = int32Reader.read(buffer);

		return { X, Y, Width, Height };
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
		int32Reader.write(buffer, content.Width, null);
		int32Reader.write(buffer, content.Height, null);
	}
}

module.exports = RectangleReader;
