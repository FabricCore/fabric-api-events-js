let { addEvent } = require("listener");

let { S2CPlayChannelEvents } = net.fabricmc.fabric.api.networking.v1;
let S2CPlayChannelEventsFields = new Set(Object.keys(S2CPlayChannelEvents));

if (S2CPlayChannelEventsFields.has("REGISTER"))
    addEvent(
        "S2CPlayChannelRegisterEvent",
        S2CPlayChannelEvents.REGISTER,
        S2CPlayChannelEvents.Register,
        "onChannelRegister",
    );

if (S2CPlayChannelEventsFields.has("UNREGISTER"))
    addEvent(
        "S2CPlayChannelUnregisterEvent",
        S2CPlayChannelEvents.UNREGISTER,
        S2CPlayChannelEvents.Unregister,
        "onChannelUnregister",
    );

let { EntityTrackingEvents } = net.fabricmc.fabric.api.networking.v1;
let EntityTrackingEventsFields = new Set(Object.keys(EntityTrackingEvents));

if (EntityTrackingEventsFields.has("START_TRACKING"))
    addEvent(
        "EntityStartTrackingEvent",
        EntityTrackingEvents.START_TRACKING,
        EntityTrackingEvents.StartTracking,
        "onStartTracking",
    );

if (EntityTrackingEventsFields.has("STOP_TRACKING"))
    addEvent(
        "EntityStopTrackingEvent",
        EntityTrackingEvents.STOP_TRACKING,
        EntityTrackingEvents.StopTracking,
        "onStopTracking",
    );

let { ServerPlayConnectionEvents } = net.fabricmc.fabric.api.networking.v1;
let ServerPlayConnectionEventsFields = new Set(
    Object.keys(ServerPlayConnectionEvents),
);

if (ServerPlayConnectionEventsFields.has("INIT"))
    addEvent(
        "ServerPlayInitEvent",
        ServerPlayConnectionEvents.INIT,
        ServerPlayConnectionEvents.Init,
        "onPlayInit",
    );

if (ServerPlayConnectionEventsFields.has("JOIN"))
    addEvent(
        "ServerPlayJoinEvent",
        ServerPlayConnectionEvents.JOIN,
        ServerPlayConnectionEvents.Join,
        "onPlayReady",
    );

if (ServerPlayConnectionEventsFields.has("DISCONNECT"))
    addEvent(
        "ServerPlayDisconnectEvent",
        ServerPlayConnectionEvents.DISCONNECT,
        ServerPlayConnectionEvents.Disconnect,
        "onPlayDisconnect",
    );

let { ServerLoginConnectionEvents } = net.fabricmc.fabric.api.networking.v1;
let ServerLoginConnectionEventsFields = new Set(
    Object.keys(ServerLoginConnectionEvents),
);

if (ServerLoginConnectionEventsFields.has("INIT"))
    addEvent(
        "ServerLoginInitEvent",
        ServerLoginConnectionEvents.INIT,
        ServerLoginConnectionEvents.Init,
        "onLoginInit",
    );

if (ServerLoginConnectionEventsFields.has("QUERY_START"))
    addEvent(
        "ServerLoginQueryStartEvent",
        ServerLoginConnectionEvents.QUERY_START,
        ServerLoginConnectionEvents.QueryStart,
        "onLoginStart",
    );

if (ServerLoginConnectionEventsFields.has("DISCONNECT"))
    addEvent(
        "ServerLoginDisconnectEvent",
        ServerLoginConnectionEvents.DISCONNECT,
        ServerLoginConnectionEvents.Disconnect,
        "onLoginDisconnect",
    );

let { C2SPlayChannelEvents } = net.fabricmc.fabric.api.client.networking.v1;
let C2SPlayChannelEventsFields = new Set(Object.keys(C2SPlayChannelEvents));

if (C2SPlayChannelEventsFields.has("REGISTER"))
    addEvent(
        "C2SPlayRegisterEvent",
        C2SPlayChannelEvents.REGISTER,
        C2SPlayChannelEvents.Register,
        "onChannelRegister",
    );

if (C2SPlayChannelEventsFields.has("UNREGISTER"))
    addEvent(
        "C2SPlayUnregisterEvent",
        C2SPlayChannelEvents.UNREGISTER,
        C2SPlayChannelEvents.Unregister,
        "onChannelUnregister",
    );

let { S2CConfigurationChannelEvents } = net.fabricmc.fabric.api.networking.v1;
let S2CConfigurationChannelEventsFields = new Set(
    Object.keys(S2CConfigurationChannelEvents),
);

if (S2CConfigurationChannelEventsFields.has("REGISTER"))
    addEvent(
        "S2CConfigChannelRegisterEvent",
        S2CConfigurationChannelEvents.REGISTER,
        S2CConfigurationChannelEvents.Register,
        "onChannelRegister",
    );

if (S2CConfigurationChannelEventsFields.has("UNREGISTER"))
    addEvent(
        "S2CConfigChannelUnregisterEvent",
        S2CConfigurationChannelEvents.UNREGISTER,
        S2CConfigurationChannelEvents.Unregister,
        "onChannelUnregister",
    );

let { ClientPlayConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;
let ClientPlayConnectionEventsFields = new Set(
    Object.keys(ClientPlayConnectionEvents),
);

if (ClientPlayConnectionEventsFields.has("INIT"))
    addEvent(
        "ClientPlayInitEvent",
        ClientPlayConnectionEvents.INIT,
        ClientPlayConnectionEvents.Init,
        "onPlayInit",
    );

if (ClientPlayConnectionEventsFields.has("JOIN"))
    addEvent(
        "ClientPlayJoinEvent",
        ClientPlayConnectionEvents.JOIN,
        ClientPlayConnectionEvents.Join,
        "onPlayReady",
    );

if (ClientPlayConnectionEventsFields.has("DISCONNECT"))
    addEvent(
        "ClientPlayDisconnectEvent",
        ClientPlayConnectionEvents.DISCONNECT,
        ClientPlayConnectionEvents.Disconnect,
        "onPlayDisconnect",
    );

let { ClientLoginConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;
let ClientLoginConnectionEventsFields = new Set(
    Object.keys(ClientLoginConnectionEvents),
);

if (ClientLoginConnectionEventsFields.has("INIT"))
    addEvent(
        "ClientLoginInitEvent",
        ClientLoginConnectionEvents.INIT,
        ClientLoginConnectionEvents.Init,
        "onLoginStart",
    );

if (ClientLoginConnectionEventsFields.has("QUERY_START"))
    addEvent(
        "ClientLoginQueryStartEvent",
        ClientLoginConnectionEvents.QUERY_START,
        ClientLoginConnectionEvents.QueryStart,
        "onLoginQueryStart",
    );

if (ClientLoginConnectionEventsFields.has("DISCONNECT"))
    addEvent(
        "ClientLoginDisconnectEvent",
        ClientLoginConnectionEvents.DISCONNECT,
        ClientLoginConnectionEvents.Disconnect,
        "onLoginDisconnect",
    );

let { C2SConfigurationChannelEvents } =
    net.fabricmc.fabric.api.client.networking.v1;
let C2SConfigChannelRegisterEventFields = new Set(
    Object.keys(C2SConfigurationChannelEvents),
);

if (C2SConfigChannelRegisterEventFields.has("REGISTER"))
    addEvent(
        "C2SConfigChannelRegisterEvent",
        C2SConfigurationChannelEvents.REGISTER,
        C2SConfigurationChannelEvents.Register,
        "onChannelRegister",
    );

if (C2SConfigChannelRegisterEventFields.has("UNREGISTER"))
    addEvent(
        "C2SConfigChannelUnregisterEvent",
        C2SConfigurationChannelEvents.UNREGISTER,
        C2SConfigurationChannelEvents.Unregister,
        "onChannelUnregister",
    );

let { ClientConfigurationConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;
let ClientConfigurationConnectionEventsFields = new Set(
    Object.keys(ClientConfigurationConnectionEvents),
);

if (ClientConfigurationConnectionEventsFields.has("INIT"))
    addEvent(
        "ClientConfigConnectionInitEvent",
        ClientConfigurationConnectionEvents.INIT,
        ClientConfigurationConnectionEvents.Init,
        "onConfigurationInit",
    );

if (ClientConfigurationConnectionEventsFields.has("START"))
    addEvent(
        "ClientConfigConnectionStartEvent",
        ClientConfigurationConnectionEvents.START,
        ClientConfigurationConnectionEvents.Start,
        "onConfigurationStart",
    );

if (ClientConfigurationConnectionEventsFields.has("COMPLETE"))
    addEvent(
        "ClientConfigConnectionCompleteEvent",
        ClientConfigurationConnectionEvents.COMPLETE,
        ClientConfigurationConnectionEvents.Complete,
        "onConfigurationComplete",
    );

if (ClientConfigurationConnectionEventsFields.has("DISCONNECT"))
    addEvent(
        "ClientConfigConnectionDisconnectEvent",
        ClientConfigurationConnectionEvents.DISCONNECT,
        ClientConfigurationConnectionEvents.Disconnect,
        "onConfigurationDisconnect",
    );

let { ServerConfigurationConnectionEvents } =
    net.fabricmc.fabric.api.networking.v1;
let ServerConfigurationConnectionEventsFields = new Set(
    Object.keys(ServerConfigurationConnectionEvents),
);

if (ServerConfigurationConnectionEventsFields.has("BEFORE_CONFIGURE"))
    addEvent(
        "ServerBeforeConfigConnectionEvent",
        ServerConfigurationConnectionEvents.BEFORE_CONFIGURE,
        ServerConfigurationConnectionEvents.Configure,
        "onSendConfiguration",
    );

if (ServerConfigurationConnectionEventsFields.has("CONFIGURE"))
    addEvent(
        "ServerConfigConnectionEvent",
        ServerConfigurationConnectionEvents.CONFIGURE,
        ServerConfigurationConnectionEvents.Configure,
        "onSendConfiguration",
    );

if (ServerConfigurationConnectionEventsFields.has("DISCONNECT"))
    addEvent(
        "ServerConfigDisconnectEvent",
        ServerConfigurationConnectionEvents.DISCONNECT,
        ServerConfigurationConnectionEvents.Disconnect,
        "onConfigureDisconnect",
    );

let { ServerBlockEntityEvents } = net.fabricmc.fabric.api.networking.v1;
let ServerBlockEntityEventsFields = new Set(
    Object.keys(ServerBlockEntityEvents),
);

if (ServerBlockEntityEventsFields.has("BLOCK_ENTITY_LOAD"))
    addEvent(
        "ServerBlockEntityLoadEvent",
        ServerBlockEntityEvents.BLOCK_ENTITY_LOAD,
        ServerBlockEntityEvents.Load,
        "onLoad",
    );

if (ServerBlockEntityEventsFields.has("BLOCK_ENTITY_UNLOAD"))
    addEvent(
        "ServerBlockEntityUnoadEvent",
        ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD,
        ServerBlockEntityEvents.Unload,
        "onUnload",
    );
