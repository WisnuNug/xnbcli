const wildTreeItemData = require('./wildTreeItemData');


module.exports = {
	...wildTreeItemData,
	$PreviousItemId: ["String"],
	DaysUntilReady: "Int32",
	$DaysUntilReadyModifiers: ["StardewValley.GameData.QuantityModifier"],
	DaysUntilReadyModifierMode: "StardewValley.GameData.QuantityModifier+QuantityModifierMode"
};