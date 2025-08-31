const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const SingleReader = require('./SingleReader');

/**
 * Vector2 Reader
 * @class
 * @extends BaseReader
 */
class Vector2Reader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.Vector2Reader':
			case 'Microsoft.Xna.Framework.Vector2':
				return true;
			default: return false;
		}
	}

 
	read(buffer) {
		const singleReader = new SingleReader();

		let x = singleReader.read(buffer);
		let y = singleReader.read(buffer);
		 
		return `${x}, ${y}`;
	}


	write(buffer, content, resolver) {
		this.writeIndex(buffer, resolver);
		const singleReader = new SingleReader();

		let x, y;

		if (typeof content === 'string') {

			const parts = content.split(',').map(s => parseFloat(s.trim()));
			x = parts[0];
			y = parts[1];
		} else {

			x = content.x;
			y = content.y;
		}

		singleReader.write(buffer, x, null);
		singleReader.write(buffer, y, null);
	}
}

module.exports = Vector2Reader;
