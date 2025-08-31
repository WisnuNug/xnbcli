
/** 
 * xnbcli-2
 * This library is based on Lybell( https://github.com/lybell-art/ )
 * schemes for write and read content
 * Stardew Valley GameData 1.6.15 build 24356 ConcernedApe
 * licensed under the LGPL 3.0 License.
 * 
*/
const GenericSpawnItemData = require('./Schemes1_6/genericSpawnItemData');
const GenericSpawnItemDataWithCondition = require('./Schemes1_6/genericSpawnItemDataWithCondition');
const CropData = require('./Schemes1_6/cropData');
const PlantableRule = require('./Schemes1_6/plantableRule');

const bundleData = require('./Schemes1_6/bundles/bundleData');
const bundleSetData = require('./Schemes1_6/bundles/bundleSetData');
const randomBundleData = require('./Schemes1_6/bundles/randomBundleData');


const LocationContextData = require('./Schemes1_6/locationContexts/locationContextData');
const PassOutMailData = require('./Schemes1_6/locationContexts/passOutMailData');
const ReviveLocation = require('./Schemes1_6/locationContexts/reviveLocation');
const WeatherCondition = require('./Schemes1_6/locationContexts/weatherCondition');
const LocationData = require('./Schemes1_6/locations/locationData');
const ArtifactSpotDropData = require('./Schemes1_6/locations/artifactSpotDropData');
const CreateLocationData = require('./Schemes1_6/locations/createLocationData');
const FishAreaData = require('./Schemes1_6/locations/fishAreaData');
const LocationMusicData = require('./Schemes1_6/locations/locationMusicData');
const SpawnFishData = require('./Schemes1_6/locations/spawnFishData');
const SpawnForageData = require('./Schemes1_6/locations/spawnForageData');

const QuantityModifier = require('./Schemes1_6/quantityModifier');
const StatIncrement = require('./Schemes1_6/statIncrement');
const TemporaryAnimatedSpriteDefinition = require('./Schemes1_6/temporaryAnimatedSpriteDefinition');
const fenceData = require('./Schemes1_6/fenceData');
const modFarmType = require('./Schemes1_6/modFarmType');
const modLanguage = require('./Schemes1_6/modLanguage');
const modWallpaperOrFlooring = require('./Schemes1_6/modWallpaperOrFlooring');
const tailorItemRecipe = require('./Schemes1_6/tailorItemRecipe');

const audioCueData = require('./Schemes1_6/audioCueData');
const incomingPhoneCallData = require('./Schemes1_6/incomingPhoneCallData');
const jukeboxTrackData = require('./Schemes1_6/jukeboxTrackData');
const mannequinData = require('./Schemes1_6/mannequinData');
const monsterSlayerQuestData = require('./Schemes1_6/monsterSlayerQuestData');
const passiveFestivalData = require('./Schemes1_6/passiveFestivalData');
const trinketData = require('./Schemes1_6/trinketData');
const triggerActionData = require('./Schemes1_6/triggerActionData'); 

const bigCraftableData = require('./Schemes1_6/bigCraftableData');
const buffData = require('./Schemes1_6/buffs/buffData');
const buffAttributesData = require('./Schemes1_6/buffs/buffAttributesData');


const buildingData = require('./Schemes1_6/buildings/buildingData');
const buildingActionTile = require('./Schemes1_6/buildings/buildingActionTile');
const buildingChest = require('./Schemes1_6/buildings/buildingChest');
const buildingDrawLayer = require('./Schemes1_6/buildings/buildingDrawLayer');
const buildingItemConversion = require('./Schemes1_6/buildings/buildingItemConversion');
const buildingMaterial = require('./Schemes1_6/buildings/buildingMaterial');
const buildingPlacementTile = require('./Schemes1_6/buildings/buildingPlacementTile');
const buildingSkin = require('./Schemes1_6/buildings/buildingSkin');
const buildingTileProperty = require('./Schemes1_6/buildings/buildingTileProperty');
const indoorItemAdd = require('./Schemes1_6/buildings/indoorItemAdd');
const indoorItemMove = require('./Schemes1_6/buildings/indoorItemMove');

const characterData = require('./Schemes1_6/characters/characterData');
const characterAppearanceData = require('./Schemes1_6/characters/characterAppearanceData');
const characterHomeData = require('./Schemes1_6/characters/characterHomeData');
const characterShadowData = require('./Schemes1_6/characters/characterShadowData');
const characterSpousePatioData = require('./Schemes1_6/characters/characterSpousePatioData');
const characterSpouseRoomData = require('./Schemes1_6/characters/characterSpouseRoomData');

const farmAnimalData = require('./Schemes1_6/farmAnimals/farmAnimalData');
const alternatePurchaseAnimals = require('./Schemes1_6/farmAnimals/alternatePurchaseAnimals');
const farmAnimalProduce = require('./Schemes1_6/farmAnimals/farmAnimalProduce');
const farmAnimalShadowData = require('./Schemes1_6/farmAnimals/farmAnimalShadowData');
const farmAnimalSkin = require('./Schemes1_6/farmAnimals/farmAnimalSkin');

const fishPondData = require('./Schemes1_6/fishPonds/fishPondData');
const fishPondReward = require('./Schemes1_6/fishPonds/fishPondReward');
const fishPondWaterColor = require('./Schemes1_6/fishPonds/fishPondWaterColor');

const floorPathData = require('./Schemes1_6/floorPathData');
const lostItemData = require('./Schemes1_6/lostItemData');

const fruitTreeData = require('./Schemes1_6/fruitTrees/fruitTreeData');
const fruitTreeFruitData = require('./Schemes1_6/fruitTrees/fruitTreeFruitData');

const garbageCanData = require('./Schemes1_6/garbageCans/garbageCanData');
const garbageCanEntryData = require('./Schemes1_6/garbageCans/garbageCanEntryData');
const garbageCanItemData = require('./Schemes1_6/garbageCans/garbageCanItemData');

const giantCropData = require('./Schemes1_6/giantCrops/giantCropData');  
const giantCropHarvestItemData = require('./Schemes1_6/giantCrops/giantCropHarvestItemData');

const homeRenovation = require('./Schemes1_6/homeRenovations/homeRenovation');
const rect = require('./Schemes1_6/homeRenovations/rect');
const rectGroup = require('./Schemes1_6/homeRenovations/rectGroup');
const renovationValue = require('./Schemes1_6/homeRenovations/renovationValue');

const machineData = require('./Schemes1_6/machines/machineData');
const machineEffects = require('./Schemes1_6/machines/machineEffects');
const machineItemAdditionalConsumedItems = require('./Schemes1_6/machines/machineItemAdditionalConsumedItems');
const machineItemOutput = require('./Schemes1_6/machines/machineItemOutput');
const machineLight = require('./Schemes1_6/machines/machineLight');
const machineOutputRule = require('./Schemes1_6/machines/machineOutputRule');
const machineOutputTriggerRule = require('./Schemes1_6/machines/machineOutputTriggerRule');
const machineSoundData = require('./Schemes1_6/machines/machineSoundData');

const makeoverOutfit = require('./Schemes1_6/makeoverOutfits/makeoverOutfit');
const makeoverItem = require('./Schemes1_6/makeoverOutfits/makeoverItem');
const minecartNetworkData = require('./Schemes1_6/minecarts/minecartNetworkData');
const minecartDestinationData = require('./Schemes1_6/minecarts/minecartDestinationData');

const movieData = require('./Schemes1_6/movies/movieData');
const movieCranePrizeData = require('./Schemes1_6/movies/movieCranePrizeData');
const movieScene = require('./Schemes1_6/movies/movieScene');
const characterResponse = require('./Schemes1_6/movies/characterResponse');
const concessionItemData = require('./Schemes1_6/movies/concessionItemData');
const concessionTaste = require('./Schemes1_6/movies/concessionTaste');
const movieCharacterReaction = require('./Schemes1_6/movies/movieCharacterReaction');
const movieReaction = require('./Schemes1_6/movies/movieReaction');
const specialResponses = require('./Schemes1_6/movies/specialResponses');

const museumRewards = require('./Schemes1_6/museum/museumRewards');
const museumDonationRequirement = require('./Schemes1_6/museum/museumDonationRequirement');

const objectData = require('./Schemes1_6/objects/objectData');
const objectBuffData = require('./Schemes1_6/objects/objectBuffData');
const objectGeodeDropData = require('./Schemes1_6/objects/objectGeodeDropData');

const shirtData = require('./Schemes1_6/shirtData');
const pantsData = require('./Schemes1_6/pantsData');
const powerData = require('./Schemes1_6/powerData');

const petData = require('./Schemes1_6/pets/petData');
const petAnimationFrame = require('./Schemes1_6/pets/petAnimationFrame');
const petBehavior = require('./Schemes1_6/pets/petBehavior');
const petBehaviorChanges = require('./Schemes1_6/pets/petBehaviorChanges');
const petBreed = require('./Schemes1_6/pets/petBreed');
const petGift = require('./Schemes1_6/pets/petGift');
const petSummitPerfectionEventData = require('./Schemes1_6/pets/petSummitPerfectionEventData');

const shopData = require('./Schemes1_6/shops/shopData');
const shopDialogueData = require('./Schemes1_6/shops/shopDialogueData');
const shopItemData = require('./Schemes1_6/shops/shopItemData');
const shopOwnerData = require('./Schemes1_6/shops/shopOwnerData');
const shopThemeData = require('./Schemes1_6/shops/shopThemeData');

const specialOrderData = require('./Schemes1_6/specialOrders/specialOrderData');
const randomizedElement = require('./Schemes1_6/specialOrders/randomizedElement');
const randomizedElementItem = require('./Schemes1_6/specialOrders/randomizedElementItem');
const specialOrderObjectiveData = require('./Schemes1_6/specialOrders/specialOrderObjectiveData');
const specialOrderRewardData = require('./Schemes1_6/specialOrders/specialOrderRewardData');


const toolData = require('./Schemes1_6/tools/toolData');
const toolUpgradeData = require('./Schemes1_6/tools/toolUpgradeData');
const weaponData = require('./Schemes1_6/weapons/weaponData');
const weaponProjectile = require('./Schemes1_6/weapons/weaponProjectile');
const weddingAttendeeData = require('./Schemes1_6/weddings/weddingAttendeeData');
const weddingData = require('./Schemes1_6/weddings/weddingData');

const wildTreeData = require('./Schemes1_6/wildTrees/wildTreeData');
const wildTreeItemData = require('./Schemes1_6/wildTrees/wildTreeItemData');
const wildTreeChopItemData = require('./Schemes1_6/wildTrees/wildTreeChopItemData');
const wildTreeSeedDropItemData = require('./Schemes1_6/wildTrees/wildTreeSeedDropItemData');
const wildTreeTapItemData = require('./Schemes1_6/wildTrees/wildTreeTapItemData');
const wildTreeTextureData = require('./Schemes1_6/wildTrees/wildTreeTextureData');

const worldMapAreaData = require('./Schemes1_6/worldMap/worldMapAreaData');
const worldMapAreaPositionData = require('./Schemes1_6/worldMap/worldMapAreaPositionData');
const worldMapAreaPositionScrollTextZoneData = require('./Schemes1_6/worldMap/worldMapAreaPositionScrollTextZoneData');
const worldMapRegionData = require('./Schemes1_6/worldMap/worldMapRegionData');
const worldMapTextureData = require('./Schemes1_6/worldMap/worldMapTextureData');
const worldMapTooltipData = require('./Schemes1_6/worldMap/worldMapTooltipData');


const schemes = {
 
	'StardewValley.GameData.GenericSpawnItemData': GenericSpawnItemData,
	'StardewValley.GameData.GenericSpawnItemDataWithCondition': GenericSpawnItemDataWithCondition,

    'StardewValley.GameData.Crops.CropData': CropData,
	'StardewValley.GameData.PlantableRule': PlantableRule, 
	'StardewValley.GameData.QuantityModifier': QuantityModifier,
	'StardewValley.GameData.StatIncrement': StatIncrement,
	'StardewValley.GameData.TemporaryAnimatedSpriteDefinition': TemporaryAnimatedSpriteDefinition,

	'StardewValley.GameData.LocationContexts.LocationContextData': LocationContextData,
	'StardewValley.GameData.LocationContexts.PassOutMailData': PassOutMailData,
	'StardewValley.GameData.LocationContexts.ReviveLocation': ReviveLocation,
	'StardewValley.GameData.LocationContexts.WeatherCondition': WeatherCondition,

	'StardewValley.GameData.Locations.LocationData': LocationData,
	'StardewValley.GameData.Locations.ArtifactSpotDropData': ArtifactSpotDropData,
	'StardewValley.GameData.Locations.CreateLocationData': CreateLocationData,
	'StardewValley.GameData.Locations.FishAreaData': FishAreaData,
	'StardewValley.GameData.Locations.LocationMusicData': LocationMusicData,
	'StardewValley.GameData.Locations.SpawnFishData': SpawnFishData,
	'StardewValley.GameData.Locations.SpawnForageData': SpawnForageData,

	'StardewValley.GameData.AudioCueData': audioCueData,
	'StardewValley.GameData.IncomingPhoneCallData': incomingPhoneCallData,
	'StardewValley.GameData.JukeboxTrackData': jukeboxTrackData,
	'StardewValley.GameData.MannequinData': mannequinData,
	'StardewValley.GameData.MonsterSlayerQuestData': monsterSlayerQuestData,
	'StardewValley.GameData.PassiveFestivalData': passiveFestivalData,
	'StardewValley.GameData.TriggerActionData': triggerActionData,
	'StardewValley.GameData.TrinketData': trinketData,
	'StardewValley.GameData.ModFarmType': modFarmType,
	'StardewValley.GameData.ModLanguage': modLanguage,
	'StardewValley.GameData.ModWallpaperOrFlooring': modWallpaperOrFlooring,
	'StardewValley.GameData.Crafting.TailorItemRecipe': tailorItemRecipe, 

	'StardewValley.GameData.BigCraftables.BigCraftableData': bigCraftableData,

	'StardewValley.GameData.Buffs.BuffData': buffData,
	'StardewValley.GameData.Buffs.BuffAttributesData': buffAttributesData,
 
	'StardewValley.GameData.Buildings.BuildingData': buildingData,
	'StardewValley.GameData.Buildings.BuildingActionTile': buildingActionTile,
	'StardewValley.GameData.Buildings.BuildingChest': buildingChest,
	'StardewValley.GameData.Buildings.BuildingDrawLayer': buildingDrawLayer,
	'StardewValley.GameData.Buildings.BuildingItemConversion': buildingItemConversion,
	'StardewValley.GameData.Buildings.BuildingMaterial': buildingMaterial,
	'StardewValley.GameData.Buildings.BuildingPlacementTile': buildingPlacementTile,
	'StardewValley.GameData.Buildings.BuildingSkin': buildingSkin,
	'StardewValley.GameData.Buildings.BuildingTileProperty': buildingTileProperty,
	'StardewValley.GameData.Buildings.IndoorItemAdd': indoorItemAdd,
	'StardewValley.GameData.Buildings.IndoorItemMove': indoorItemMove,

	'StardewValley.GameData.Characters.CharacterData': characterData,
	'StardewValley.GameData.Characters.CharacterAppearanceData': characterAppearanceData,
	'StardewValley.GameData.Characters.CharacterHomeData': characterHomeData,
	'StardewValley.GameData.Characters.CharacterShadowData': characterShadowData,
	'StardewValley.GameData.Characters.CharacterSpousePatioData': characterSpousePatioData,
	'StardewValley.GameData.Characters.CharacterSpouseRoomData': characterSpouseRoomData,


	'StardewValley.GameData.FarmAnimals.FarmAnimalData': farmAnimalData,
	'StardewValley.GameData.FarmAnimals.AlternatePurchaseAnimals': alternatePurchaseAnimals,
	'StardewValley.GameData.FarmAnimals.FarmAnimalProduce': farmAnimalProduce,
	'StardewValley.GameData.FarmAnimals.FarmAnimalShadowData': farmAnimalShadowData,
	'StardewValley.GameData.FarmAnimals.FarmAnimalSkin': farmAnimalSkin,

	'StardewValley.GameData.Fences.FenceData': fenceData,

	'StardewValley.GameData.FishPonds.FishPondData': fishPondData,
	'StardewValley.GameData.FishPonds.FishPondReward': fishPondReward,
	'StardewValley.GameData.FishPonds.FishPondWaterColor': fishPondWaterColor,

	'StardewValley.GameData.FloorsAndPaths.FloorPathData': floorPathData,

	'StardewValley.GameData.FruitTrees.FruitTreeData': fruitTreeData,
	'StardewValley.GameData.FruitTrees.FruitTreeFruitData': fruitTreeFruitData,

	'StardewValley.GameData.GarbageCans.GarbageCanData': garbageCanData,
	'StardewValley.GameData.GarbageCans.GarbageCanEntryData': garbageCanEntryData,
	'StardewValley.GameData.GarbageCans.GarbageCanItemData': garbageCanItemData,

	'StardewValley.GameData.GiantCrops.GiantCropData': giantCropData,
	'StardewValley.GameData.GiantCrops.GiantCropHarvestItemData': giantCropHarvestItemData,
	'StardewValley.GameData.LostItem': lostItemData,

	'StardewValley.GameData.HomeRenovations.HomeRenovation': homeRenovation,
	'StardewValley.GameData.HomeRenovations.Rect': rect,
	'StardewValley.GameData.HomeRenovations.RenovationValue': renovationValue,
	'StardewValley.GameData.HomeRenovations.RectGroup': rectGroup,

	'StardewValley.GameData.Machines.MachineData': machineData,
	'StardewValley.GameData.Machines.MachineEffects': machineEffects,
	'StardewValley.GameData.Machines.MachineItemAdditionalConsumedItems': machineItemAdditionalConsumedItems,
	'StardewValley.GameData.Machines.MachineItemOutput': machineItemOutput,
	'StardewValley.GameData.Machines.MachineLight': machineLight,
	'StardewValley.GameData.Machines.MachineOutputRule': machineOutputRule,
	'StardewValley.GameData.Machines.MachineOutputTriggerRule': machineOutputTriggerRule,
	'StardewValley.GameData.Machines.MachineSoundData': machineSoundData,

	'StardewValley.GameData.MakeoverOutfits.MakeoverOutfit': makeoverOutfit,
	'StardewValley.GameData.MakeoverOutfits.MakeoverItem': makeoverItem,

	'StardewValley.GameData.Minecarts.MinecartNetworkData': minecartNetworkData,
	'StardewValley.GameData.Minecarts.MinecartDestinationData': minecartDestinationData,


	'StardewValley.GameData.Movies.MovieData': movieData,
	'StardewValley.GameData.Movies.MovieScene': movieScene,
	'StardewValley.GameData.Movies.MovieCranePrizeData': movieCranePrizeData,
	'StardewValley.GameData.Movies.CharacterResponse': characterResponse,
	'StardewValley.GameData.Movies.ConcessionItemData': concessionItemData,
	'StardewValley.GameData.Movies.ConcessionTaste': concessionTaste,
	'StardewValley.GameData.Movies.MovieCharacterReaction': movieCharacterReaction,
	'StardewValley.GameData.Movies.MovieReaction': movieReaction,
	'StardewValley.GameData.Movies.SpecialResponses': specialResponses,

	'StardewValley.GameData.Museum.MuseumRewards': museumRewards,
	'StardewValley.GameData.Museum.MuseumDonationRequirement': museumDonationRequirement,

	'StardewValley.GameData.Objects.ObjectData': objectData,
	'StardewValley.GameData.Objects.ObjectBuffData': objectBuffData,
	'StardewValley.GameData.Objects.ObjectGeodeDropData': objectGeodeDropData,

	'StardewValley.GameData.Shirts.ShirtData': shirtData,
	'StardewValley.GameData.Pants.PantsData': pantsData,
	'StardewValley.GameData.Pants.PantsData': pantsData,

	'StardewValley.GameData.Pets.PetData': petData,
	'StardewValley.GameData.Pets.PetAnimationFrame': petAnimationFrame,
	'StardewValley.GameData.Pets.PetBehavior': petBehavior,
	'StardewValley.GameData.Pets.PetBehaviorChanges': petBehaviorChanges,
	'StardewValley.GameData.Pets.PetBreed': petBreed,
	'StardewValley.GameData.Pets.PetGift': petGift,
	'StardewValley.GameData.Pets.PetSummitPerfectionEventData': petSummitPerfectionEventData,

	'StardewValley.GameData.Powers.PowersData': powerData,

	'StardewValley.GameData.Shops.ShopData': shopData,
	'StardewValley.GameData.Shops.ShopDialogueData': shopDialogueData,
	'StardewValley.GameData.Shops.ShopItemData': shopItemData,
	'StardewValley.GameData.Shops.ShopOwnerData': shopOwnerData,
	'StardewValley.GameData.Shops.ShopThemeData': shopThemeData,

	'StardewValley.GameData.Tools.ToolData': toolData,
	'StardewValley.GameData.Tools.ToolUpgradeData': toolUpgradeData,

	'StardewValley.GameData.Weapons.WeaponData': weaponData,
	'StardewValley.GameData.Weapons.WeaponProjectile': weaponProjectile,

	'StardewValley.GameData.Weddings.WeddingData': weddingData,
	'StardewValley.GameData.Weddings.WeddingAttendeeData': weddingAttendeeData,

	'StardewValley.GameData.WildTrees.WildTreeData': wildTreeData,
	'StardewValley.GameData.WildTrees.WildTreeItemData': wildTreeItemData,
	'StardewValley.GameData.WildTrees.WildTreeChopItemData': wildTreeChopItemData,
	'StardewValley.GameData.WildTrees.WildTreeSeedDropItemData': wildTreeSeedDropItemData,
	'StardewValley.GameData.WildTrees.WildTreeTapItemData': wildTreeTapItemData,
	'StardewValley.GameData.WildTrees.WildTreeTextureData': wildTreeTextureData,

	'StardewValley.GameData.WorldMaps.WorldMapAreaData': worldMapAreaData,
	'StardewValley.GameData.WorldMaps.WorldMapAreaPositionData': worldMapAreaPositionData,
	'StardewValley.GameData.WorldMaps.WorldMapAreaPositionScrollTextZoneData': worldMapAreaPositionScrollTextZoneData,
	'StardewValley.GameData.WorldMaps.WorldMapRegionData': worldMapRegionData,
	'StardewValley.GameData.WorldMaps.WorldMapTextureData': worldMapTextureData,
	'StardewValley.GameData.WorldMaps.WorldMapTooltipData': worldMapTooltipData,


	'StardewValley.GameData.Bundles.BundleData': bundleData,
	'StardewValley.GameData.Bundles.BundleSetData': bundleSetData,
	'StardewValley.GameData.Bundles.RandomBundleData': randomBundleData,

	'StardewValley.GameData.SpecialOrders.SpecialOrderData': specialOrderData,
	'StardewValley.GameData.SpecialOrders.RandomizedElement': randomizedElement,
	'StardewValley.GameData.SpecialOrders.RandomizedElementItem': randomizedElementItem,
	'StardewValley.GameData.SpecialOrders.SpecialOrderObjectiveData': specialOrderObjectiveData,
	'StardewValley.GameData.SpecialOrders.SpecialOrderRewardData': specialOrderRewardData,

	'System.Object': {}

};

module.exports = schemes;