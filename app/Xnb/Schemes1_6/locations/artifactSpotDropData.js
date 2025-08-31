const genericSpawnItemDataWithCondition = require('../genericSpawnItemDataWithCondition');

module.exports =  {
	...genericSpawnItemDataWithCondition,
	"Chance": "Double",
	"ApplyGenerousEnchantment": "Boolean",
	"OneDebrisPerDrop": "Boolean",
	"Precedence": "Int32",
	"ContinueOnDrop": "Boolean"
};