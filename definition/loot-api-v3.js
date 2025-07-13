let { addEvent } = require("listener");

let { LootTableEvents } = net.fabricmc.fabric.api.loot.v3;

addEvent(
    "LootTableReplaceEvent",
    LootTableEvents.REPLACE,
    LootTableEvents.Replace,
    "replaceLootTable",
    (res, [_, original]) => res ?? original,
    (res, args) => {
        args[1] = res;
        return args;
    },
);

addEvent(
    "LootTableModifyEvent",
    LootTableEvents.MODIFY,
    LootTableEvents.Modify,
    "modifyLootTable",
);

addEvent(
    "LootTableLoadedEvent",
    LootTableEvents.ALL_LOADED,
    LootTableEvents.Loaded,
    "onLootTablesLoaded",
);

if (Object.keys(LootTableEvents).includes("MODIFY_DROPS")) {
    addEvent(
        "LootTableModifyDropsEvent",
        LootTableEvents.MODIFY_DROPS,
        LootTableEvents.ModifyDrops,
        "modifyLootTableDrops",
    );
}
