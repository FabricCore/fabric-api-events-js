let { addEvent } = require("listener");

let { ServerMessageEvents } = net.fabricmc.fabric.api.message.v1;

ServerMessageEvents.ALLOW_CHAT_MESSAGE;
ServerMessageEvents.ALLOW_GAME_MESSAGE;
ServerMessageEvents.ALLOW_COMMAND_MESSAGE;
ServerMessageEvents.CHAT_MESSAGE;
ServerMessageEvents.GAME_MESSAGE;
ServerMessageEvents.COMMAND_MESSAGE;

let { ClientSendMessageEvents } = net.fabricmc.fabric.api.client.message.v1;

addEvent(
    "ClientAllowSendChatMessageEvent",
    ClientSendMessageEvents.ALLOW_CHAT,
    ClientSendMessageEvents.AllowChat,
    "allowSendChatMessage",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "ClientAllowSendCommandMessageEvent",
    ClientSendMessageEvents.ALLOW_COMMAND,
    ClientSendMessageEvents.AllowCommand,
    "allowSendCommandMessage",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "ClientModifySendChatMessageEvent",
    ClientSendMessageEvents.MODIFY_CHAT,
    ClientSendMessageEvents.ModifyChat,
    "modifySendChatMessage",
    (res, [original]) => res ?? original,
    (res) => [true, res],
);

addEvent(
    "ClientModifySendCommandMessageEvent",
    ClientSendMessageEvents.MODIFY_COMMAND,
    ClientSendMessageEvents.ModifyCommand,
    "modifySendCommandMessage",
    (res, [original]) => res ?? original,
    (res) => [true, res],
);

addEvent(
    "ClientSendChatMessageEvent",
    ClientSendMessageEvents.CHAT,
    ClientSendMessageEvents.Chat,
    "onSendChatMessage",
);

addEvent(
    "ClientSendCommandMessageEvent",
    ClientSendMessageEvents.COMMAND,
    ClientSendMessageEvents.Command,
    "onSendCommandMessage",
);

addEvent(
    "ClientSendChatMessageCancelledEvent",
    ClientSendMessageEvents.CHAT_CANCELED,
    ClientSendMessageEvents.ChatCanceled,
    "onSendChatMessageCanceled",
);

addEvent(
    "ClientSendCommandMessageCancelledEvent",
    ClientSendMessageEvents.COMMAND_CANCELED,
    ClientSendMessageEvents.CommandCanceled,
    "onSendCommandMessageCanceled",
);

let { ClientReceiveMessageEvents } = net.fabricmc.fabric.api.client.message.v1;

addEvent(
    "ClientAllowReceiveChatMessageEvent",
    ClientReceiveMessageEvents.ALLOW_CHAT,
    ClientReceiveMessageEvents.AllowChat,
    "allowReceiveChatMessage",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "ClientAllowReceiveGameMessageEvent",
    ClientReceiveMessageEvents.ALLOW_GAME,
    ClientReceiveMessageEvents.AllowGame,
    "allowReceiveGameMessage",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

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

addEvent(
    "ClientReceiveChatMessageEvent",
    ClientReceiveMessageEvents.CHAT,
    ClientReceiveMessageEvents.Chat,
    "onReceiveChatMessage",
);

addEvent(
    "ClientReceiveGameMessageEvent",
    ClientReceiveMessageEvents.GAME,
    ClientReceiveMessageEvents.Game,
    "onReceiveGameMessage",
);

addEvent(
    "ClientReceiveChatMessageCancelled",
    ClientReceiveMessageEvents.CHAT_CANCELED,
    ClientReceiveMessageEvents.ChatCanceled,
    "onReceiveChatMessageCanceled",
);

addEvent(
    "ClientReceiveGameMessageCancelled",
    ClientReceiveMessageEvents.GAME_CANCELED,
    ClientReceiveMessageEvents.GameCanceled,
    "onReceiveGameMessageCanceled",
);
