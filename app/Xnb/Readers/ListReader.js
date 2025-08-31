const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const ReaderResolver = require('../ReaderResolver');
const UInt32Reader = require('./UInt32Reader');

/**
 * List Reader
 * @class
 * @extends BaseReader
 */
class ListReader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.ListReader':
			case 'System.Collections.Generic.List':
				return true;
			default: return false;
		}
	}
	static hasSubType() {
		return true;
	}

	constructor(reader) {
		super();
		/** @type {BaseReader} */
		this.reader = reader;
	}

	/**
	 * Reads List from buffer.
	 * @param {BufferReader} buffer
	 * @param {ReaderResolver} resolver
	 * @returns {Array}
	 */
	read(buffer, resolver) {
		const uint32Reader = new UInt32Reader();
		const size = uint32Reader.read(buffer);

		const list = [];
		for (let i = 0; i < size; i++) {
			const value = this.reader.isValueType() ? this.reader.read(buffer) : resolver.read(buffer);
			list.push(value);
		}
		return list;
	}

	/**
	 * Writes List into the buffer
	 * @param {BufferWriter} buffer
	 * @param {Array} data
	 * @param {ReaderResolver} resolver
	 */
	write(buffer, content, resolver) {
		this.writeIndex(buffer, resolver);
		const uint32Reader = new UInt32Reader();
		uint32Reader.write(buffer, content.length, null);
		for (let data of content) {
			this.reader.write(buffer, data, (this.reader.isValueType() ? null : resolver));
		}
	}

	isValueType() {
		return false;
	}

	get type() {
		return `List<${this.reader.type}>`;
	}

	parseTypeList() {
		const inBlock = this.reader.parseTypeList();
		return [`${this.type}:${inBlock.length}`, ...inBlock];
	}
}


module.exports = ListReader;
