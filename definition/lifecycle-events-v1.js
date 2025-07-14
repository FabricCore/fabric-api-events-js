let { addEvent } = require("listener");

let { ServerTickEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

/*
ServerTickEvents.START_SERVER_TICK;
ServerTickEvents.END_SERVER_TICK;
ServerTickEvents.START_WORLD_TICK;
ServerTickEvents.END_WORLD_TICK;
*/

let { ServerChunkEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

/*
ServerChunkEvents.CHUNK_LOAD;
ServerChunkEvents.CHUNK_GENERATE;
ServerChunkEvents.CHUNK_UNLOAD;
ServerChunkEvents.CHUNK_LEVEL_TYPE_CHANGE;
*/

let { ServerEntityEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

/*
ServerEntityEvents.ENTITY_LOAD;
ServerEntityEvents.ENTITY_UNLOAD;
ServerEntityEvents.EQUIPMENT_CHANGE;
*/

let { ServerLifecycleEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

/*
ServerLifecycleEvents.SERVER_STARTING;
ServerLifecycleEvents.SERVER_STARTED;
ServerLifecycleEvents.SERVER_STOPPING;
ServerLifecycleEvents.SERVER_STOPPED;
ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS;
ServerLifecycleEvents.START_DATA_PACK_RELOAD;
ServerLifecycleEvents.END_DATA_PACK_RELOAD;
ServerLifecycleEvents.BEFORE_SAVE;
ServerLifecycleEvents.AFTER_SAVE;
*/

let { CommonLifecycleEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;
let CommonLifecycleEventsFields = new Set(Object.keys(CommonLifecycleEvents));

if (CommonLifecycleEventsFields.has("TAGS_LOADED"))
    addEvent(
        "TagsLoadedEvent",
        CommonLifecycleEvents.TAGS_LOADED,
        CommonLifecycleEvents.TagsLoaded,
        "onTagsLoaded",
    );

let { ClientTickEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;
let ClientTickEventsFields = new Set(Object.keys(ClientTickEvents));

if (ClientTickEventsFields.has("START_CLIENT_TICK"))
    addEvent(
        "StartClientTickEvent",
        ClientTickEvents.START_CLIENT_TICK,
        ClientTickEvents.StartTick,
        "onStartTick",
    );

if (ClientTickEventsFields.has("END_CLIENT_TICK"))
    addEvent(
        "EndClientTickEvent",
        ClientTickEvents.END_CLIENT_TICK,
        ClientTickEvents.EndTick,
        "onEndTick",
    );

if (ClientTickEventsFields.has("START_WORLD_TICK"))
    addEvent(
        "StartClientWorldTickEvent",
        ClientTickEvents.START_WORLD_TICK,
        ClientTickEvents.StartWorldTick,
        "onStartTick",
    );

if (ClientTickEventsFields.has("END_WORLD_TICK"))
    addEvent(
        "EndClientWorldTickEvent",
        ClientTickEvents.END_WORLD_TICK,
        ClientTickEvents.EndWorldTick,
        "onEndTick",
    );

let { ClientChunkEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;
let ClientChunkEventsFields = new Set(Object.keys(ClientChunkEvents));

if (ClientChunkEventsFields.has("CHUNK_LOAD"))
    addEvent(
        "ClientChunkLoadEvent",
        ClientChunkEvents.CHUNK_LOAD,
        ClientChunkEvents.Load,
        "onChunkLoad",
    );

if (ClientChunkEventsFields.has("CHUNK_UNLOAD"))
    addEvent(
        "ClientChunkUnloadEvent",
        ClientChunkEvents.CHUNK_UNLOAD,
        ClientChunkEvents.Unload,
        "onChunkUnload",
    );

let { ClientWorldEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;
let ClientWorldEventsFields = new Set(Object.keys(ClientWorldEvents));

if (ClientWorldEventsFields.has("AFTER_CLIENT_WORLD_CHANGE"))
    addEvent(
        "ClientAfterWorldChangeEvent",
        ClientWorldEvents.AFTER_CLIENT_WORLD_CHANGE,
        ClientWorldEvents.AfterClientWorldChange,
        "afterWorldChange",
    );

let { ClientEntityEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;
let ClientEntityEventsFields = new Set(Object.keys(ClientEntityEvents));

if (ClientEntityEventsFields.has("ENTITY_LOAD"))
    addEvent(
        "ClientEntityLoadEvent",
        ClientEntityEvents.ENTITY_LOAD,
        ClientEntityEvents.Load,
        "onLoad",
    );

if (ClientEntityEventsFields.has("ENTITY_UNLOAD"))
    addEvent(
        "ClientEntityUnloadEvent",
        ClientEntityEvents.ENTITY_UNLOAD,
        ClientEntityEvents.Unload,
        "onUnload",
    );

let { ClientBlockEntityEvents } =
    net.fabricmc.fabric.api.client.event.lifecycle.v1;
let ClientBlockEntityEventsFields = new Set(
    Object.keys(ClientBlockEntityEvents),
);

if (ClientBlockEntityEventsFields.has("BLOCK_ENTITY_LOAD"))
    addEvent(
        "ClientBlockEntityLoadEvent",
        ClientBlockEntityEvents.BLOCK_ENTITY_LOAD,
        ClientBlockEntityEvents.Load,
        "onLoad",
    );

if (ClientBlockEntityEventsFields.has("BLOCK_ENTITY_UNLOAD"))
    addEvent(
        "ClientBlockEntityUnloadEvent",
        ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD,
        ClientBlockEntityEvents.Unload,
        "onUnload",
    );

let { ServerWorldEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;
let ServerWorldEventsFields = new Set(Object.keys(ServerWorldEvents));

/*
ServerWorldEvents.LOAD;
ServerWorldEvents.UNLOAD;
*/

let { ClientLifecycleEvents } =
    net.fabricmc.fabric.api.client.event.lifecycle.v1;
let ClientLifecycleEventsFields = new Set(Object.keys(ClientLifecycleEvents));

if (ClientLifecycleEventsFields.has("CLIENT_STARTED"))
    addEvent(
        "ClientStartedEvent",
        ClientLifecycleEvents.CLIENT_STARTED,
        ClientLifecycleEvents.ClientStarted,
        "onClientStarted",
    );

if (ClientLifecycleEventsFields.has("CLIENT_STOPPING"))
    addEvent(
        "ClientStoppingEvent",
        ClientLifecycleEvents.CLIENT_STOPPING,
        ClientLifecycleEvents.ClientStopping,
        "onClientStopping",
    );
