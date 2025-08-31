const genericSpawnItemDataWithCondition = require('../genericSpawnItemDataWithCondition');

module.exports =  {
	...genericSpawnItemDataWithCondition,
	"Chance": "Single",
	"$ForShavingEnchantment": "Boolean",
	"$ScaledMinStackWhenShaving": "Int32",
	"$ScaledMaxStackWhenShaving": "Int32"
};