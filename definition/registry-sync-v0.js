let { addEvent } = require("listener");

let { DynamicRegistrySetupCallback } = net.fabricmc.fabric.api.event.registry;

addEvent(
    "DynamicRegistrySetupEvent",
    DynamicRegistrySetupCallback.EVENT,
    DynamicRegistrySetupCallback,
    "onRegistrySetup",
);
