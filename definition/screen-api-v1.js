let { addEvent } = require("listener");

let { ScreenEvents } = net.fabricmc.fabric.api.client.screen.v1;
let ScreenEventsFields = new Set(Object.keys(ScreenEvents));

if (ScreenEventsFields.has("BEFORE_INIT"))
    addEvent(
        "ScreenBeforeInitEvent",
        ScreenEvents.BEFORE_INIT,
        ScreenEvents.BeforeInit,
        "beforeInit",
    );

if (ScreenEventsFields.has("AFTER_INIT"))
    addEvent(
        "ScreenAfterInitEvent",
        ScreenEvents.AFTER_INIT,
        ScreenEvents.AfterInit,
        "afterInit",
    );
