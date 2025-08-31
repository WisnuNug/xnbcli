const genericSpawnItemDataWithCondition = require('../genericSpawnItemDataWithCondition');

module.exports = {
	...genericSpawnItemDataWithCondition,
	Chance: "Double",
	$SetFlagOnPickup: "String",
	Precedence: "Int32"
};