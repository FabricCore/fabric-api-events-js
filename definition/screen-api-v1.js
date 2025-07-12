let { addEvent } = require("listener");

let { ScreenEvents } = net.fabricmc.fabric.api.client.screen.v1;

addEvent(
    "ScreenBeforeInitEvent",
    ScreenEvents.BEFORE_INIT,
    ScreenEvents.BeforeInit,
    "beforeInit",
);

addEvent(
    "ScreenAfterInitEvent",
    ScreenEvents.AFTER_INIT,
    ScreenEvents.AfterInit,
    "afterInit",
);
