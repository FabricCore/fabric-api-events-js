let { S2CPlayChannelEvents } = net.fabricmc.fabric.api.networking.v1;

S2CPlayChannelEvents.REGISTER;
S2CPlayChannelEvents.UNREGISTER;

let { EntityTrackingEvents } = net.fabricmc.fabric.api.networking.v1;

EntityTrackingEvents.START_TRACKING;
EntityTrackingEvents.STOP_TRACKING;

let { ServerPlayConnectionEvents } = net.fabricmc.fabric.api.networking.v1;

ServerPlayConnectionEvents.INIT;
ServerPlayConnectionEvents.JOIN;
ServerPlayConnectionEvents.DISCONNECT;

let { ServerLoginConnectionEvents } = net.fabricmc.fabric.api.networking.v1;

ServerLoginConnectionEvents.INIT;
ServerLoginConnectionEvents.QUERY_START;
ServerLoginConnectionEvents.DISCONNECT;

let { C2SPlayChannelEvents } = net.fabricmc.fabric.api.client.networking.v1;

C2SPlayChannelEvents.REGISTER;
C2SPlayChannelEvents.UNREGISTER;

let { S2CConfigurationChannelEvents } = net.fabricmc.fabric.api.networking.v1;

S2CConfigurationChannelEvents.REGISTER;
S2CConfigurationChannelEvents.UNREGISTER;

let { ClientPlayConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

ClientPlayConnectionEvents.INIT;
ClientPlayConnectionEvents.JOIN;
ClientPlayConnectionEvents.DISCONNECT;

let { ClientLoginConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

ClientLoginConnectionEvents.INIT;
ClientLoginConnectionEvents.QUERY_START;
ClientLoginConnectionEvents.DISCONNECT;

let { C2SConfigurationChannelEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

C2SConfigurationChannelEvents.REGISTER;
C2SConfigurationChannelEvents.UNREGISTER;

let { ClientConfigurationConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;

ClientConfigurationConnectionEvents.INIT;
ClientConfigurationConnectionEvents.START;
ClientConfigurationConnectionEvents.COMPLETE;
ClientConfigurationConnectionEvents.DISCONNECT;

let { ServerConfigurationConnectionEvents } =
    net.fabricmc.fabric.api.networking.v1;

ServerConfigurationConnectionEvents.BEFORE_CONFIGURE;
ServerConfigurationConnectionEvents.CONFIGURE;
ServerConfigurationConnectionEvents.DISCONNECT;

let { ServerBlockEntityEvents } = net.fabricmc.fabric.api.networking.v1;

ServerBlockEntityEvents.BLOCK_ENTITY_LOAD;
ServerBlockEntityEvents.BLOCK_ENTITY_UNLOAD;
