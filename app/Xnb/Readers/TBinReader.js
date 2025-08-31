const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const BufferWrite = require('../../BufferWriter');
const Int32Reader = require('./Int32Reader');

/**
 * TBin Reader
 * @class
 * @extends BaseReader
 */
class TBinReader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'xTile.Pipeline.TideReader':
				return true;
			default: return false;
		}
	}

	read(buffer) {
		const int32Reader = new Int32Reader();

		// read in the size of the data block
		let size = int32Reader.read(buffer);
		// read in the data block
		let data = buffer.read(size);

		// return the data
		return { export: { type: this.type, data } };
	}

	write(buffer, content, resolver) {
		this.writeIndex(buffer, resolver);
		const data = content.export.data;
		const int32Reader = new Int32Reader();
		int32Reader.write(buffer, data.byteLength, null);
		buffer.concat(data);
	}

	isValueType() {
		return false;
	}
}

module.exports = TBinReader;
