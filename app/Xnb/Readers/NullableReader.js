const BaseReader = require('./BaseReader');
const BufferReader = require('../../BufferReader');
const BufferWriter = require('../../BufferWriter');
const BooleanReader = require('./BooleanReader');

/**
 * Nullable Reader
 * @class
 * @extends BaseReader
 */
class NullableReader extends BaseReader {
	static isTypeOf(type) {
		switch (type) {
			case 'Microsoft.Xna.Framework.Content.NullableReader':
				return true;
			default: return false;
		}
	}
	static hasSubType() {
		return true;
	}

	/**
	 * @constructor
	 * @param {BaseReader} reader
	 */
	constructor(reader) {
		super();
		/**
		 * Nullable type
		 * @type {BaseReader}
		 */
		this.reader = reader;
	}

	/**
	 * Reads Nullable type from buffer.
	 * @param {BufferReader} buffer
	 * @param {ReaderResolver} resolver
	 * @returns {mixed|null}
	 */
	read(buffer) {
		let resolver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		const booleanReader = new BooleanReader();
		const hasValue = buffer.peekByte(1);
		if (!hasValue) {
			booleanReader.read(buffer);
			return null;
		}
		if (resolver === null || this.reader.isValueType()) {
			booleanReader.read(buffer);
			return this.reader.read(buffer);
		}
		return resolver.read(buffer);
	}
	write(buffer) {
		let content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		let resolver = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
		const booleanReader = new BooleanReader();
		if (content === null) {
			buffer.writeByte(0);
			return;
		}
		if (resolver === null || this.reader.isValueType()) buffer.writeByte(1);
		this.reader.write(buffer, content, this.reader.isValueType() ? null : resolver);
	}
	isValueType() {
		return false;
	}
	get type() {
		return "Nullable<".concat(this.reader.type, ">");
	}
	parseTypeList() {
		const inBlock = this.reader.parseTypeList();
		return ["".concat(this.type, ":").concat(inBlock.length), ...inBlock];
	}
}


module.exports = NullableReader;
