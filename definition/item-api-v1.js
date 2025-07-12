let { addEvent } = require("listener");

let { EnchantmentEvents } = net.fabricmc.fabric.api.item.v1;
let { TriState } = net.fabricmc.fabric.api.util;

addEvent(
    "AllowEnchantingEvent",
    EnchantmentEvents.ALLOW_ENCHANTING,
    EnchantmentEvents.AllowEnchanting,
    "allowEnchanting",
    (res, _) => res ?? TriState.DEFAULT,
    (res, args) => (res == TriState.DEFAULT ? [true, args] : [false, res]),
);

addEvent(
    "ModifyEnchantingEvent",
    EnchantmentEvents.MODIFY,
    EnchantmentEvents.Modify,
    "modify",
);

let { ItemTooltipCallback } = net.fabricmc.fabric.api.client.item.v1;

addEvent(
    "ItemTooltipEvent",
    ItemTooltipCallback.EVENT,
    ItemTooltipCallback,
    "getTooltip",
);

let { DefaultItemComponentEvents } = net.fabricmc.fabric.api.item.v1;

addEvent(
    "DefaultItemComponentModifyEvent",
    DefaultItemComponentEvents.MODIFY,
    DefaultItemComponentEvents.ModifyCallback,
    "modify",
);
