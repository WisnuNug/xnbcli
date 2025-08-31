const genericSpawnItemDataWithCondition = require ('../genericSpawnItemDataWithCondition');

module.exports =  {
	...genericSpawnItemDataWithCondition,
	RequiredPopulation: "Int32",
	Chance: "Single",
	Precedence: "Int32"
};