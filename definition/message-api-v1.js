let { addEvent } = require("listener");

let { ServerMessageEvents } = net.fabricmc.fabric.api.message.v1;
let ServerMessageEventsFields = new Set(Object.keys(ServerMessageEvents));

/*
ServerMessageEvents.ALLOW_CHAT_MESSAGE;
ServerMessageEvents.ALLOW_GAME_MESSAGE;
ServerMessageEvents.ALLOW_COMMAND_MESSAGE;
ServerMessageEvents.CHAT_MESSAGE;
ServerMessageEvents.GAME_MESSAGE;
ServerMessageEvents.COMMAND_MESSAGE;
*/

let { ClientSendMessageEvents } = net.fabricmc.fabric.api.client.message.v1;
let ClientSendMessageEventsFields = new Set(
    Object.keys(ClientSendMessageEvents),
);

if (ClientSendMessageEventsFields.has("ALLOW_CHAT"))
    addEvent(
        "ClientAllowSendChatMessageEvent",
        ClientSendMessageEvents.ALLOW_CHAT,
        ClientSendMessageEvents.AllowChat,
        "allowSendChatMessage",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );

if (ClientSendMessageEventsFields.has("ALLOW_COMMAND"))
    addEvent(
        "ClientAllowSendCommandMessageEvent",
        ClientSendMessageEvents.ALLOW_COMMAND,
        ClientSendMessageEvents.AllowCommand,
        "allowSendCommandMessage",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );

if (ClientSendMessageEventsFields.has("MODIFY_CHAT"))
    addEvent(
        "ClientModifySendChatMessageEvent",
        ClientSendMessageEvents.MODIFY_CHAT,
        ClientSendMessageEvents.ModifyChat,
        "modifySendChatMessage",
        (res, [original]) => res ?? original,
        (res) => [true, res],
    );

if (ClientSendMessageEventsFields.has("MODIFY_COMMAND"))
    addEvent(
        "ClientModifySendCommandMessageEvent",
        ClientSendMessageEvents.MODIFY_COMMAND,
        ClientSendMessageEvents.ModifyCommand,
        "modifySendCommandMessage",
        (res, [original]) => res ?? original,
        (res) => [true, res],
    );

if (ClientSendMessageEventsFields.has("CHAT"))
    addEvent(
        "ClientSendChatMessageEvent",
        ClientSendMessageEvents.CHAT,
        ClientSendMessageEvents.Chat,
        "onSendChatMessage",
    );

if (ClientSendMessageEventsFields.has("COMMAND"))
    addEvent(
        "ClientSendCommandMessageEvent",
        ClientSendMessageEvents.COMMAND,
        ClientSendMessageEvents.Command,
        "onSendCommandMessage",
    );

if (ClientSendMessageEventsFields.has("CHAT_CANCELED"))
    addEvent(
        "ClientSendChatMessageCancelledEvent",
        ClientSendMessageEvents.CHAT_CANCELED,
        ClientSendMessageEvents.ChatCanceled,
        "onSendChatMessageCanceled",
    );

if (ClientSendMessageEventsFields.has("COMMAND_CANCELED"))
    addEvent(
        "ClientSendCommandMessageCancelledEvent",
        ClientSendMessageEvents.COMMAND_CANCELED,
        ClientSendMessageEvents.CommandCanceled,
        "onSendCommandMessageCanceled",
    );

let { ClientReceiveMessageEvents } = net.fabricmc.fabric.api.client.message.v1;
let ClientReceiveMessageEventsFields = new Set(
    Object.keys(ClientReceiveMessageEvents),
);

if (ClientSendMessageEventsFields.has("ALLOW_CHAT"))
    addEvent(
        "ClientAllowReceiveChatMessageEvent",
        ClientReceiveMessageEvents.ALLOW_CHAT,
        ClientReceiveMessageEvents.AllowChat,
        "allowReceiveChatMessage",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );

if (ClientSendMessageEventsFields.has("ALLOW_GAME"))
    addEvent(
        "ClientAllowReceiveGameMessageEvent",
        ClientReceiveMessageEvents.ALLOW_GAME,
        ClientReceiveMessageEvents.AllowGame,
        "allowReceiveGameMessage",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );

if (ClientSendMessageEventsFields.has("MODIFY_GAME"))
    addEvent(
        "ClientModifyReceiveGameMessageEvent",
        ClientReceiveMessageEvents.MODIFY_GAME,
        ClientReceiveMessageEvents.ModifyGame,
        "modifyReceivedGameMessage",
        (res, [original]) => res ?? original,
        (res, args) => {
            args[0] = res;
            return [true, args];
        },
    );

if (ClientSendMessageEventsFields.has("CHAT"))
    addEvent(
        "ClientReceiveChatMessageEvent",
        ClientReceiveMessageEvents.CHAT,
        ClientReceiveMessageEvents.Chat,
        "onReceiveChatMessage",
    );

if (ClientSendMessageEventsFields.has("GAME"))
    addEvent(
        "ClientReceiveGameMessageEvent",
        ClientReceiveMessageEvents.GAME,
        ClientReceiveMessageEvents.Game,
        "onReceiveGameMessage",
    );

if (ClientSendMessageEventsFields.has("CHAT_CANCELED"))
    addEvent(
        "ClientReceiveChatMessageCancelled",
        ClientReceiveMessageEvents.CHAT_CANCELED,
        ClientReceiveMessageEvents.ChatCanceled,
        "onReceiveChatMessageCanceled",
    );

if (ClientSendMessageEventsFields.has("GAME_CANCELED"))
    addEvent(
        "ClientReceiveGameMessageCancelled",
        ClientReceiveMessageEvents.GAME_CANCELED,
        ClientReceiveMessageEvents.GameCanceled,
        "onReceiveGameMessageCanceled",
    );
