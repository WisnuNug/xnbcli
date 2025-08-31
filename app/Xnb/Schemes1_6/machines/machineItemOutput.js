const genericSpawnItemDataWithCondition = require('../genericSpawnItemDataWithCondition');

module.exports = {
  ...genericSpawnItemDataWithCondition,
  "$OutputMethod": "String",
  "CopyColor": "Boolean",
  "CopyPrice": "Boolean",
  "CopyQuality": "Boolean",
  "$PreserveType": "String",
  "$PreserveId": "String",
  "IncrementMachineParentSheetIndex": "Int32",
  "$PriceModifiers": [
    "StardewValley.GameData.QuantityModifier"
  ],
  "PriceModifierMode": "StardewValley.GameData.QuantityModifier+QuantityModifierMode",
  "$CustomData": {"String": "String"}
};