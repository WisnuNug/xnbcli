const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const BufferWriter = require('../../BufferWriter');
const ReaderResolver = require('../ReaderResolver');
const UInt32Reader = require('./UInt32Reader');
const XnbError = require('../../XnbError');

class DictionaryReader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.DictionaryReader':
				return true;
			default: return false;
		}
	}
	static hasSubType() {
		return true;
	}


	constructor(key, value) {
		if (key == undefined || value == undefined)
			throw new XnbError('Cannot create instance of DictionaryReader without Key and Value.');
		super();
		this.key = key;
		this.value = value;
	}


	read(buffer, resolver) {
		let dictionary = {};

		const uint32Reader = new UInt32Reader();
		const size = uint32Reader.read(buffer);

		for (let i = 0; i < size; i++) {


			let key = this.key.isValueType() ? this.key.read(buffer) : resolver.read(buffer);
	
			let value = this.value.isValueType() ? this.value.read(buffer) : resolver.read(buffer);


			dictionary[key] = value;
		}

		return dictionary;
	}

	write(buffer, content, resolver) {
		// write the index
		this.writeIndex(buffer, resolver);

		// write the amount of entries in the Dictionary
		buffer.writeUInt32(Object.keys(content).length);

		// loop over the entries
		for (let key of Object.keys(content)) {
			// write the key
			this.key.write(buffer, key, (this.key.isValueType() ? null : resolver));
			// write the value
			this.value.write(buffer, content[key], (this.value.isValueType() ? null : resolver));
		}
	}
	 

	isValueType() {
		return false;
	}

	get type() {
		return `Dictionary<${this.key.type},${this.value.type}>`;
	}

	parseTypeList() {
		return [this.type, ...this.key.parseTypeList(), ...this.value.parseTypeList()];
	}
}

module.exports = DictionaryReader;