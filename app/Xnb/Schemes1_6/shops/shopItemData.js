const genericSpawnItemDataWithCondition = require('../genericSpawnItemDataWithCondition');

module.exports = {
    ...genericSpawnItemDataWithCondition,
    "$TradeItemId": "String",
    "TradeItemAmount": "Int32",
    "Price": "Int32",
    "$ApplyProfitMargins": "Boolean",
    "AvailableStock": "Int32",
    "AvailableStockLimit": "StardewValley.GameData.Shops.LimitedStockMode",
    "AvoidRepeat": "Boolean",
    "UseObjectDataPrice": "Boolean",
    "IgnoreShopPriceModifiers": "Boolean",
    "$PriceModifiers": [
        "StardewValley.GameData.QuantityModifier"
    ],
    "PriceModifierMode": "StardewValley.GameData.QuantityModifier+QuantityModifierMode",
    "$AvailableStockModifiers": [
        "StardewValley.GameData.QuantityModifier"
    ],
    "AvailableStockModifierMode": "StardewValley.GameData.QuantityModifier+QuantityModifierMode",
    "$ActionsOnPurchase": ["String"],
    "$CustomFields": { "String": "String" }

};