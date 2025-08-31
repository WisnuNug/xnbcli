const genericSpawnItemDataWithCondition = require('../genericSpawnItemDataWithCondition');

module.exports = {
	...genericSpawnItemDataWithCondition,
	"Chance": "Single",
	"$Season": "StardewValley.Season",
	"$FishAreaId": "String",
	"$BobberPosition": "Rectangle",
	"$PlayerPosition": "Rectangle",
	"MinFishingLevel": "Int32",
	"MinDistanceFromShore": "Int32",
	"MaxDistanceFromShore": "Int32",
	"ApplyDailyLuck": "Boolean",
	"CuriosityLureBuff": "Single",
	"SpecificBaitBuff": "Single",
	"SpecificBaitMultiplier": "Single",
	"CatchLimit": "Int32",
	"$CanUseTrainingRod": "Boolean",
	"IsBossFish": "Boolean",
	"$SetFlagOnCatch": "String",
	"RequireMagicBait": "Boolean",
	"Precedence": "Int32",
	"IgnoreFishDataRequirements": "Boolean",
	"CanBeInherited": "Boolean",
	"$ChanceModifiers": ["StardewValley.GameData.QuantityModifier"],
	"ChanceModifierMode": "StardewValley.GameData.QuantityModifier+QuantityModifierMode",
	"ChanceBoostPerLuckLevel": "Single",
	"UseFishCaughtSeededRandom": "Boolean"
};