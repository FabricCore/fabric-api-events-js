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

ClientTickEvents.START_CLIENT_TICK;
ClientTickEvents.END_CLIENT_TICK;
ClientTickEvents.START_WORLD_TICK;
ClientTickEvents.END_WORLD_TICK;

let { ClientChunkEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;

ClientChunkEvents.CHUNK_LOAD;
ClientChunkEvents.CHUNK_UNLOAD;

let { ClientWorldEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;

ClientWorldEvents.AFTER_CLIENT_WORLD_CHANGE;

let { ClientEntityEvents } = net.fabricmc.fabric.api.client.event.lifecycle.v1;

ClientEntityEvents.ENTITY_LOAD;
ClientEntityEvents.ENTITY_UNLOAD;

let { ClientBlockEntityEvents } =
    net.fabricmc.fabric.api.client.event.lifecycle.v1;

ClientBlockEntityEvents.BLOCK_ENTITY_LOAD;
ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD;

let { ServerWorldEvents } = net.fabricmc.fabric.api.event.lifecycle.v1;

ServerWorldEvents.LOAD;
ServerWorldEvents.UNLOAD;

let { ClientLifecycleEvents } =
    net.fabricmc.fabric.api.client.event.lifecycle.v1;

ClientLifecycleEvents.CLIENT_STARTED;
ClientLifecycleEvents.CLENT_STOPPING;
