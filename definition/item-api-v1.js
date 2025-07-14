let { addEvent } = require("listener");

let { EnchantmentEvents } = net.fabricmc.fabric.api.item.v1;
let { TriState } = net.fabricmc.fabric.api.util;
let EnchantmentEventsFields = new Set(Object.keys(EnchantmentEvents));

if (EnchantmentEventsFields.has("ALLOW_ENCHANTING"))
    addEvent(
        "AllowEnchantingEvent",
        EnchantmentEvents.ALLOW_ENCHANTING,
        EnchantmentEvents.AllowEnchanting,
        "allowEnchanting",
        (res, _) => res ?? TriState.DEFAULT,
        (res, args) => (res == TriState.DEFAULT ? [true, args] : [false, res]),
    );

if (EnchantmentEventsFields.has("MODIFY"))
    addEvent(
        "ModifyEnchantingEvent",
        EnchantmentEvents.MODIFY,
        EnchantmentEvents.Modify,
        "modify",
    );

let { ItemTooltipCallback } = net.fabricmc.fabric.api.client.item.v1;
let ItemTooltipCallbackFields = new Set(Object.keys(ItemTooltipCallback));

if (ItemTooltipCallbackFields.has("EVENT"))
    addEvent(
        "ItemTooltipEvent",
        ItemTooltipCallback.EVENT,
        ItemTooltipCallback,
        "getTooltip",
    );

let { DefaultItemComponentEvents } = net.fabricmc.fabric.api.item.v1;
let DefaultItemComponentEventsFields = new Set(
    Object.keys(DefaultItemComponentEvents),
);

if (DefaultItemComponentEventsFields.has("MODIFY"))
    addEvent(
        "DefaultItemComponentModifyEvent",
        DefaultItemComponentEvents.MODIFY,
        DefaultItemComponentEvents.ModifyCallback,
        "modify",
    );
