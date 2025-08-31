const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const SingleReader = require('./SingleReader');

/**
 * Vector3 Reader
 * @class
 * @extends BaseReader
 */
class Vector3Reader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.Vector3Reader':
			case 'Microsoft.Xna.Framework.Vector3':
				return true;
			default: return false;
		}
	}

	/**
	 * Reads Vector3 from buffer.
	 * @param {BufferReader} buffer
	 * @returns {object}
	 */
	read(buffer) {
		const singleReader = new SingleReader();

		let X = singleReader.read(buffer);
		let Y = singleReader.read(buffer);
		let Z = singleReader.read(buffer);

		return { X, Y, Z };
	}

	write(buffer, content, resolver) {
		this.writeIndex(buffer, resolver);
		const singleReader = new SingleReader();
		singleReader.write(buffer, content.X, null);
		singleReader.write(buffer, content.Y, null);
		singleReader.write(buffer, content.Z, null);
	}
}

module.exports = Vector3Reader;
