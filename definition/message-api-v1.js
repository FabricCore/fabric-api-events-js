let { ServerMessageEvents } = net.fabricmc.fabric.api.message.v1;

ServerMessageEvents.ALLOW_CHAT_MESSAGE;
ServerMessageEvents.ALLOW_GAME_MESSAGE;
ServerMessageEvents.ALLOW_COMMAND_MESSAGE;
ServerMessageEvents.CHAT_MESSAGE;
ServerMessageEvents.GAME_MESSAGE;
ServerMessageEvents.COMMAND_MESSAGE;

let { ClientSendMessageEvents } = net.fabricmc.fabric.api.client.message.v1;

ClientSendMessageEvents.ALLOW_CHAT;
ClientSendMessageEvents.ALLOW_COMMAND;
ClientSendMessageEvents.MODIFY_CHAT;
ClientSendMessageEvents.MODIFY_COMMAND;
ClientSendMessageEvents.CHAT;
ClientSendMessageEvents.COMMAND;
ClientSendMessageEvents.CHAT_CANCELLED;
ClientSendMessageEvents.COMMAND_CANCELLED;

let { ClientReceiveMessageEvents } = net.fabricmc.fabric.api.client.message.v1;

ClientReceiveMessageEvents.ALLOW_CHAT;
ClientReceiveMessageEvents.ALLOW_GAME;
ClientReceiveMessageEvents.MODIFY_GAME;
ClientReceiveMessageEvents.CHAT;
ClientReceiveMessageEvents.GAME;
ClientReceiveMessageEvents.CHAT_CANCELED;
ClientReceiveMessageEvents.GAME_CANCELED;
