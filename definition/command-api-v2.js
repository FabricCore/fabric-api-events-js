let { addEvent } = require("listener");

let { CommandRegistrationCallback } = net.fabricmc.fabric.api.command.v2;

addEvent(
    "CommandRegistrationEvent",
    CommandRegistrationCallback.EVENT,
    CommandRegistrationCallback,
    "register",
);

let { ClientCommandRegistrationCallback } =
    net.fabricmc.fabric.api.client.command.v2;

addEvent(
    "ClientCommandRegistrationEvent",
    ClientCommandRegistrationCallback.EVENT,
    ClientCommandRegistrationCallback,
    "register",
);
