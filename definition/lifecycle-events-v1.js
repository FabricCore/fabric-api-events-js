let { addEvent } = require("listener");

let { ServerTickEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

ServerTickEvents.START_SERVER_TICK;
ServerTickEvents.END_SERVER_TICK;
ServerTickEvents.START_WORLD_TICK;
ServerTickEvents.END_WORLD_TICK;

let { ServerChunkEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

ServerChunkEvents.CHUNK_LOAD;
ServerChunkEvents.CHUNK_GENERATE;
ServerChunkEvents.CHUNK_UNLOAD;
ServerChunkEvents.CHUNK_LEVEL_TYPE_CHANGE;

let { ServerEntityEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

ServerEntityEvents.ENTITY_LOAD;
ServerEntityEvents.ENTITY_UNLOAD;
ServerEntityEvents.EQUIPMENT_CHANGE;

let { ServerLifecycleEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

ServerLifecycleEvents.SERVER_STARTING;
ServerLifecycleEvents.SERVER_STARTED;
ServerLifecycleEvents.SERVER_STOPPING;
ServerLifecycleEvents.SERVER_STOPPED;
ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS;
ServerLifecycleEvents.START_DATA_PACK_RELOAD;
ServerLifecycleEvents.END_DATA_PACK_RELOAD;
ServerLifecycleEvents.BEFORE_SAVE;
ServerLifecycleEvents.AFTER_SAVE;

let { CommonLifecycleEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

CommonLifecycleEvents.TAGS_LOADED;

let { ClientTickEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;

addEvent(
    "StartClientTickEvent",
    ClientTickEvents.START_CLIENT_TICK,
    ClientTickEvents.StartTick,
    "onStartTick",
);

addEvent(
    "EndClientTickEvent",
    ClientTickEvents.END_CLIENT_TICK,
    ClientTickEvents.EndTick,
    "onEndTick",
);

addEvent(
    "StartClientWorldTickEvent",
    ClientTickEvents.START_WORLD_TICK,
    ClientTickEvents.StartWorldTick,
    "onStartTick",
);

addEvent(
    "EndClientWorldTickEvent",
    ClientTickEvents.END_WORLD_TICK,
    ClientTickEvents.EndWorldTick,
    "onEndTick",
);

let { ClientChunkEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;

addEvent(
    "ClientChunkLoadEvent",
    ClientChunkEvents.CHUNK_LOAD,
    ClientChunkEvents.Load,
    "onChunkLoad",
);

addEvent(
    "ClientChunkUnloadEvent",
    ClientChunkEvents.CHUNK_UNLOAD,
    ClientChunkEvents.Unload,
    "onChunkUnload",
);

let { ClientWorldEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;

addEvent(
    "ClientAfterWorldChangeEvent",
    ClientWorldEvents.AFTER_CLIENT_WORLD_CHANGE,
    ClientWorldEvents.AfterClientWorldChange,
    "afterWorldChange",
);

let { ClientEntityEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;

addEvent(
    "ClientEntityLoadEvent",
    ClientEntityEvents.ENTITY_LOAD,
    ClientEntityEvents.Load,
    "onLoad",
);

addEvent(
    "ClientEntityUnloadEvent",
    ClientEntityEvents.ENTITY_UNLOAD,
    ClientEntityEvents.Unload,
    "onUnload",
);

let { ClientBlockEntityEvents } =
    net.fabricmc.fabric.api.client.event.lifecycle.v1;

addEvent(
    "ClientBlockEntityLoadEvent",
    ClientBlockEntityEvents.BLOCK_ENTITY_LOAD,
    ClientBlockEntityEvents.Load,
    "onLoad",
);

addEvent(
    "ClientBlockEntityUnloadEvent",
    ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD,
    ClientBlockEntityEvents.Unload,
    "onUnload",
);

let { ServerWorldEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

ServerWorldEvents.LOAD;
ServerWorldEvents.UNLOAD;

let { ClientLifecycleEvents } =
    net.fabricmc.fabric.api.client.event.lifecycle.v1;

addEvent(
    "ClientStartedEvent",
    ClientLifecycleEvents.CLIENT_STARTED,
    ClientLifecycleEvents.ClientStarted,
    "onClientStarted",
);

addEvent(
    "ClientStoppingEvent",
    ClientLifecycleEvents.CLIENT_STOPPING,
    ClientLifecycleEvents.ClientStopping,
    "onClientStopping",
);
