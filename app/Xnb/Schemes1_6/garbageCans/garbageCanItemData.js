
const genericSpawnItemDataWithCondition = require('../genericSpawnItemDataWithCondition');

module.exports =   {
	...genericSpawnItemDataWithCondition,
	IgnoreBaseChance: "Boolean",
	IsMegaSuccess: "Boolean",
	IsDoubleMegaSuccess: "Boolean",
	AddToInventoryDirectly: "Boolean",
	CreateMultipleDebris: "Boolean"
}