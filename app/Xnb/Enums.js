/** 
 * xnbcli
 * Enum class based from game version 1.6.15
 * Special Thanks to ConcernedApe
 * 
*/

const enums = {

    "StardewValley.GameData.QuantityModifier+ModificationType": {
        0: "Add",
        1: "Subtract",
        2: "Multiply",
        3: "Divide",
        4: "Set"
    },
    "StardewValley.GameData.QuantityModifier+QuantityModifierMode": {
        0: "Stack",
        1: "Minimum",
        2: "Maximum"
    },
    "StardewValley.GameData.MusicContext": {
        0: "Default",
        1: "SubLocation",
        2: "MusicPlayer",
        3: "Event",
        4: "MiniGame",
        5: "ImportantSplitScreenMusic",
        6: "MAX",
    },
    "StardewValley.GameData.PlantableResult": {
        0: "Default",
        1: "Allow",
        2: "Deny"
    },
    "StardewValley.GameData.PlantableRuleContext": {
        1: "Ground",
        2: "GardenPot",
        3: "Any"
    },
    "StardewValley.GameData.Buildings.BuildingChestType": {
        0: "Chest",
        1: "Collect",
        2: "Load"
    },
    "StardewValley.Gender": {
        0: "Male",
        1: "Female",
        2: "Undefined"
    },
    "StardewValley.GameData.Characters.CalendarBehavior": {
        0: "AlwaysShown",
        1: "HiddenUntilMet",
        2: "HiddenAlways"
    },
    "StardewValley.GameData.Characters.EndSlideShowBehavior": {
        0: "Hidden",
        1: "MainGroup",
        2: "TrailingGroup"
    },
    "StardewValley.GameData.Characters.NpcAge": {
        0: "Adult",
        1: "Teen",
        2: "Child"
    },
    "StardewValley.GameData.Characters.NpcLanguage": {
        0: "Default",
        1: "Dwarvish"
    },
    "StardewValley.GameData.Characters.NpcManner": {
        0: "Neutral",
        1: "Polite",
        2: "Rude"
    },
    "StardewValley.GameData.Characters.NpcOptimism": {
        0: "Positive",
        1: "Negative",
        2: "Neutral"
    },
    "StardewValley.GameData.Characters.NpcSocialAnxiety": {
        0: "Outgoing",
        1: "Shy",
        2: "Neutral"
    },
    "StardewValley.GameData.Characters.SocialTabBehavior": {
        0: "UnknownUntilMet",
        1: "AlwaysShown",
        2: "HiddenUntilMet",
        3: "HiddenAlways"
    },
    "StardewValley.Season": {
        0: "Spring",
        1: "Summer",
        2: "Fall",
        3: "Winter"
    },
    "StardewValley.GameData.Crops.HarvestMethod": {
        0: "Grab",
        1: "Scythe"
    },
    "StardewValley.GameData.FloorsAndPaths.FloorPathConnectType": {
        0: "Default",
        1: "Path",
        2: "CornerDecorated",
        3: "Random"
    },
    "StardewValley.GameData.FloorsAndPaths.FloorPathShadowType": {
        0: "None",
        1: "Square",
        2: "Contoured"
    },

    "StardewValley.GameData.Machines.MachineOutputTrigger": {
        0: "UnknownUntilMet",
        1: "ItemPlacedInMachine",
        2: "OutputCollected",
        4: "MachinePutDown",
        8: "DayUpdate"
    },
    "StardewValley.GameData.Machines.MachineTimeBlockers": {
        0: "Outside",
        1: "Inside",
        2: "Spring",
        3: "Summer",
        4: "Fall",
        5: "Winter",
        6: "Sun",
        7: "Rain",
        8: "Always"
    },

   
    "StardewValley.GameData.Pets.PetAnimationLoopMode": {
        0: "None",
        1: "Loop",
        2: "Hold"
    },
    "StardewValley.GameData.Shops.LimitedStockMode": {
        0: "Global",
        1: "Player",
        2: "None"
    },
    "StardewValley.GameData.Shops.ShopOwnerType": {
        0: "NamedNpc",
        1: "Any",
        2: "AnyOrNone",
        3: "None"
    },
    "StardewValley.GameData.Shops.StackSizeVisibility": {
        0: "Hide",
        1: "Show",
        2: "ShowIfMultiple"
    },

    "StardewValley.GameData.SpecialOrders.QuestDuration": {
        0: "Week",
        1: "Month",
        2: "TwoWeeks",
        3: "TwoDays",
        4: "ThreeDays",
        5: "OneDay",
    },

    "StardewValley.GameData.WildTrees.WildTreeGrowthStage": {
        0: "Seed",
        1: "Sprout",
        2: "Sapling",
        3: "Bush",
        5: "Tree",
    },
    "StardewValley.GameData.FarmAnimals.FarmAnimalHarvestType": {
        0: "DropOvernight",
        1: "HarvestWithTool",
        2: "DigUp"
    },
    "StardewValley.GameData.FarmAnimals.FarmAnimalGender": {
        0: "Female",
        1: "Male",
        2: "MaleOrFemale"
    }
};

module.exports = enums;
