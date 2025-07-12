let { addEvent } = require("listener");

let { ItemGroupEvents } = net.fabricmc.fabric.api.itemgroup.v1;

addEvent(
    "ItemGroupModifyEntriesAllEvent",
    ItemGroupEvents.MODIFY_ENTRIES_ALL,
    ItemGroupEvents.ModifyEntriesAll,
    "modifyEntries",
);
