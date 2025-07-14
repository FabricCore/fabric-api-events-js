let { addEvent } = require("listener");

let { DynamicRegistrySetupCallback } = net.fabricmc.fabric.api.event.registry;
let DynamicRegistrySetupCallbackField = new Set(
    Object.keys(DynamicRegistrySetupCallback),
);

if (DynamicRegistrySetupCallbackField.has("EVENT"))
    addEvent(
        "DynamicRegistrySetupEvent",
        DynamicRegistrySetupCallback.EVENT,
        DynamicRegistrySetupCallback,
        "onRegistrySetup",
    );
