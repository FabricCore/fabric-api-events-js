let { addEvent } = require("listener");

let { CommandRegistrationCallback } = net.fabricmc.fabric.api.command.v2;
let CommandRegistrationCallbackFields = new Set(
    Object.keys(CommandRegistrationCallback),
);

if (CommandRegistrationCallbackFields.has("EVENT"))
    addEvent(
        "CommandRegistrationEvent",
        CommandRegistrationCallback.EVENT,
        CommandRegistrationCallback,
        "register",
    );

let { ClientCommandRegistrationCallback } =
    net.fabricmc.fabric.api.client.command.v2;
let ClientCommandRegistrationCallbackFields = new Set(
    Object.keys(ClientCommandRegistrationCallback),
);

if (ClientCommandRegistrationCallbackFields.has("EVENT"))
    addEvent(
        "ClientCommandRegistrationEvent",
        ClientCommandRegistrationCallback.EVENT,
        ClientCommandRegistrationCallback,
        "register",
    );
