let { addEvent } = require("listener");

let { LootTableEvents } = net.fabricmc.fabric.api.loot.v3;
let LootTableEventsFields = new Set(Object.keys(LootTableEvents));

if (LootTableEventsFields.has("REPLACE"))
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

if (LootTableEventsFields.has("MODIFY"))
    addEvent(
        "LootTableModifyEvent",
        LootTableEvents.MODIFY,
        LootTableEvents.Modify,
        "modifyLootTable",
    );

if (LootTableEventsFields.has("ALL_LOADED"))
    addEvent(
        "LootTableLoadedEvent",
        LootTableEvents.ALL_LOADED,
        LootTableEvents.Loaded,
        "onLootTablesLoaded",
    );

if (LootTableEventsFields.has("MODIFY_DROPS"))
    addEvent(
        "LootTableModifyDropsEvent",
        LootTableEvents.MODIFY_DROPS,
        LootTableEvents.ModifyDrops,
        "modifyLootTableDrops",
    );
