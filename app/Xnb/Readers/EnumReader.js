const BaseReader = require('./BaseReader');
const enums = require('../Enums');
 
class EnumReader extends BaseReader {

    static isTypeOf(type) {
        switch (type) {
            case 'Microsoft.Xna.Framework.Content.EnumReader':
                return true;
            default: return false;
        }
    }
    constructor(name) {
        super(); 
        this.name = name;
    }

    isValueType() {
        return true;
    }

    read(buffer) {
        const intValue = buffer.readInt32();
        const enumMap = enums[this.name];

        if (enumMap && enumMap[intValue] !== undefined) {
            return enumMap[intValue];
        }

        return intValue;
    }

    write(buffer, content, resolver) {
        this.writeIndex(buffer, resolver);

        const enumMap = enums[this.name];
        let intValue = content;

        if (enumMap && typeof content === 'string') {
            const found = Object.entries(enumMap).find(([k, v]) => v === content);
            if (found) {
                intValue = parseInt(found[0]);
            } else {
                throw new Error(`Enum value "${content}" not found in ${this.name}`);
            }
        }

        buffer.writeInt32(intValue);
    }


    toString() {
        return `EnumReader<${this.name}>`;
    }

    get type() {
        return `EnumReader<${this.name}>`;
    }

    
}


module.exports = EnumReader;

