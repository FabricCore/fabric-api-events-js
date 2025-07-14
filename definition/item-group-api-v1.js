let { addEvent } = require("listener");

let { ItemGroupEvents } = net.fabricmc.fabric.api.itemgroup.v1;
let ItemGroupEventsFields = new Set(Object.keys(ItemGroupEvents));

if (ItemGroupEventsFields.has("MODIFY_ENTRIES_ALL"))
    addEvent(
        "ItemGroupModifyEntriesAllEvent",
        ItemGroupEvents.MODIFY_ENTRIES_ALL,
        ItemGroupEvents.ModifyEntriesAll,
        "modifyEntries",
    );
