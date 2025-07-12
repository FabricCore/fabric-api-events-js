let { addEvent } = require("listener");

let { S2CPlayChannelEvents } = net.fabricmc.fabric.api.networking.v1;

addEvent(
    "S2CPlayChannelRegisterEvent",
    S2CPlayChannelEvents.REGISTER,
    S2CPlayChannelEvents.Register,
    "onChannelRegister",
);

addEvent(
    "S2CPlayChannelUnregisterEvent",
    S2CPlayChannelEvents.UNREGISTER,
    S2CPlayChannelEvents.Unregister,
    "onChannelUnregister",
);

let { EntityTrackingEvents } = net.fabricmc.fabric.api.networking.v1;

addEvent(
    "EntityStartTrackingEvent",
    EntityTrackingEvents.START_TRACKING,
    EntityTrackingEvents.StartTracking,
    "onStartTracking",
);

addEvent(
    "EntityStopTrackingEvent",
    EntityTrackingEvents.STOP_TRACKING,
    EntityTrackingEvents.StopTracking,
    "onStopTracking",
);

let { ServerPlayConnectionEvents } = net.fabricmc.fabric.api.networking.v1;

addEvent(
    "ServerPlayInitEvent",
    ServerPlayConnectionEvents.INIT,
    ServerPlayConnectionEvents.Init,
    "onPlayInit",
);

addEvent(
    "ServerPlayJoinEvent",
    ServerPlayConnectionEvents.JOIN,
    ServerPlayConnectionEvents.Join,
    "onPlayReady",
);

addEvent(
    "ServerPlayDisconnectEvent",
    ServerPlayConnectionEvents.DISCONNECT,
    ServerPlayConnectionEvents.Disconnect,
    "onPlayDisconnect",
);

let { ServerLoginConnectionEvents } = net.fabricmc.fabric.api.networking.v1;

addEvent(
    "ServerLoginInitEvent",
    ServerLoginConnectionEvents.INIT,
    ServerLoginConnectionEvents.Init,
    "onLoginInit",
);

addEvent(
    "ServerLoginQueryStartEvent",
    ServerLoginConnectionEvents.QUERY_START,
    ServerLoginConnectionEvents.QueryStart,
    "onLoginStart",
);

addEvent(
    "ServerLoginDisconnectEvent",
    ServerLoginConnectionEvents.DISCONNECT,
    ServerLoginConnectionEvents.Disconnect,
    "onLoginDisconnect",
);

let { C2SPlayChannelEvents } = net.fabricmc.fabric.api.client.networking.v1;

addEvent(
    "C2SPlayRegisterEvent",
    C2SPlayChannelEvents.REGISTER,
    C2SPlayChannelEvents.Register,
    "onChannelRegister",
);

addEvent(
    "C2SPlayUnregisterEvent",
    C2SPlayChannelEvents.UNREGISTER,
    C2SPlayChannelEvents.Unregister,
    "onChannelUnregister",
);

let { S2CConfigurationChannelEvents } = net.fabricmc.fabric.api.networking.v1;

addEvent(
    "S2CConfigChannelRegisterEvent",
    S2CConfigurationChannelEvents.REGISTER,
    S2CConfigurationChannelEvents.Register,
    "onChannelRegister",
);

addEvent(
    "S2CConfigChannelUnregisterEvent",
    S2CConfigurationChannelEvents.UNREGISTER,
    S2CConfigurationChannelEvents.Unregister,
    "onChannelUnregister",
);

let { ClientPlayConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

addEvent(
    "ClientPlayInitEvent",
    ClientPlayConnectionEvents.INIT,
    ClientPlayConnectionEvents.Init,
    "onPlayInit",
);

addEvent(
    "ClientPlayJoinEvent",
    ClientPlayConnectionEvents.JOIN,
    ClientPlayConnectionEvents.Join,
    "onPlayReady",
);

addEvent(
    "ClientPlayDisconnectEvent",
    ClientPlayConnectionEvents.DISCONNECT,
    ClientPlayConnectionEvents.Disconnect,
    "onPlayDisconnect",
);

let { ClientLoginConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

addEvent(
    "ClientLoginInitEvent",
    ClientLoginConnectionEvents.INIT,
    ClientLoginConnectionEvents.Init,
    "onLoginStart",
);

addEvent(
    "ClientLoginQueryStartEvent",
    ClientLoginConnectionEvents.QUERY_START,
    ClientLoginConnectionEvents.QueryStart,
    "onLoginQueryStart",
);

addEvent(
    "ClientLoginDisconnectEvent",
    ClientLoginConnectionEvents.DISCONNECT,
    ClientLoginConnectionEvents.Disconnect,
    "onLoginDisconnect",
);

let { C2SConfigurationChannelEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

addEvent(
    "C2SConfigChannelRegisterEvent",
    C2SConfigurationChannelEvents.REGISTER,
    C2SConfigurationChannelEvents.Register,
    "onChannelRegister",
);

addEvent(
    "C2SConfigChannelUnregisterEvent",
    C2SConfigurationChannelEvents.UNREGISTER,
    C2SConfigurationChannelEvents.Unegister,
    "onChannelUnegister",
);

let { ClientConfigurationConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

addEvent(
    "ClientConfigConnectionInitEvent",
    ClientConfigurationConnectionEvents.INIT,
    ClientConfigurationConnectionEvents.Init,
    "onConfigurationInit",
);

addEvent(
    "ClientConfigConnectionStartEvent",
    ClientConfigurationConnectionEvents.START,
    ClientConfigurationConnectionEvents.Start,
    "onConfigurationStart",
);

addEvent(
    "ClientConfigConnectionCompleteEvent",
    ClientConfigurationConnectionEvents.COMPLETE,
    ClientConfigurationConnectionEvents.Complete,
    "onConfigurationComplete",
);

addEvent(
    "ClientConfigConnectionDisconnectEvent",
    ClientConfigurationConnectionEvents.DISCONNECT,
    ClientConfigurationConnectionEvents.Disconnect,
    "onConfigurationDisconnect",
);

let { ServerConfigurationConnectionEvents } =
    net.fabricmc.fabric.api.networking.v1;

addEvent(
    "ServerBeforeConfigConnectionEvent",
    ServerConfigurationConnectionEvents.BEFORE_CONFIGURE,
    ServerConfigurationConnectionEvents.Configure,
    "onSendConfiguration",
);

addEvent(
    "ServerConfigConnectionEvent",
    ServerConfigurationConnectionEvents.CONFIGURE,
    ServerConfigurationConnectionEvents.Configure,
    "onSendConfiguration",
);

addEvent(
    "ServerConfigDisconnectEvent",
    ServerConfigurationConnectionEvents.DISCONNECT,
    ServerConfigurationConnectionEvents.Disconnect,
    "onConfigureDisconnect",
);

let { ServerBlockEntityEvents } = net.fabricmc.fabric.api.networking.v1;

addEvent(
    "ServerBlockEntityLoadEvent",
    ServerBlockEntityEvents.BLOCK_ENTITY_LOAD,
    ServerBlockEntityEvents.Load,
    "onLoad",
);

addEvent(
    "ServerBlockEntityUnoadEvent",
    ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD,
    ServerBlockEntityEvents.Unload,
    "onUnload",
);
