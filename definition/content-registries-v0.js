let { addEvent } = require("listener");

let { FuelRegistryEvents } = net.fabricmc.fabric.api.registry;
let FuelRegistryEventsFields = new Set(Object.keys(FuelRegistryEvents));

if (FuelRegistryEventsFields.has("BUILD"))
    addEvent(
        "FuelRegistryBuildEvent",
        FuelRegistryEvents.BUILD,
        FuelRegistryEvents.BuildCallback,
        "build",
    );

if (FuelRegistryEventsFields.has("EXCLUSIONS"))
    addEvent(
        "FuelRegistryExclusionEvent",
        FuelRegistryEvents.EXCLUSIONS,
        FuelRegistryEvents.ExclusionsCallback,
        "buildExclusions",
    );

let { FabricBrewingRecipeRegistryBuilder } = net.fabricmc.fabric.api.registry;
let FabricBrewingRecipeRegistryBuilderFields = new Set(
    Object.keys(FabricBrewingRecipeRegistryBuilder),
);

if (FabricBrewingRecipeRegistryBuilderFields.has("BUILD"))
    addEvent(
        "BrewingRecipeRegistryBuildEvent",
        FabricBrewingRecipeRegistryBuilder.BUILD,
        FabricBrewingRecipeRegistryBuilder.BuildCallback,
        "build",
    );
