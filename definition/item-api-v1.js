let { EnchantmentEvents } = net.fabricmc.fabric.api.item.v1;

EnchantmentEvents.ALLOW_ENCHANTING;
EnchantmentEvents.MODIFY;

let { ItemTooltipCallback } = net.fabricmc.fabric.api.client.item.v1;

ItemTooltipCallback.EVENT;

let { DefaultItemComponentEvents } = net.fabricmc.fabric.api.item.v1;

DefaultItemComponentEvents.MODIFY;
