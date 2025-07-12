let { addEvent } = require("listener");

let { FuelRegistryEvents } = net.fabricmc.fabric.api.registry;

addEvent(
    "FuelRegistryBuildEvent",
    FuelRegistryEvents.BUILD,
    FuelRegistryEvents.BuildCallback,
    "build",
);

addEvent(
    "FuelRegistryExclusionEvent",
    FuelRegistryEvents.EXCLUSIONS,
    FuelRegistryEvents.ExclusionsCallback,
    "buildExclusions",
);

let { FabricBrewingRecipeRegistryBuilder } = net.fabricmc.fabric.api.registry;

addEvent(
    "FabricBrewingRecipeRegistryBuildEvent",
    FabricBrewingRecipeRegistryBuilder.BUILD,
    FabricBrewingRecipeRegistryBuilder.BuildCallback,
    "build",
);
