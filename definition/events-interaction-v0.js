let { UseItemCallback } = net.fabricmc.fabric.api.event.player;

UseItemCallback.EVENT;

let { UseBlockCallback } = net.fabricmc.fabric.api.event.player;

UseBlockCallback.EVENT;

let { PlayerPickItemEvents } = net.fabricmc.fabric.api.event.player;

PlayerPickItemEvents.BLOCK;
PlayerPickItemEvents.ENTITY;

let { AttackEntityCallback } = net.fabricmc.fabric.api.event.player;

AttackEntityCallback.EVENT;

let { PlayerBlockBreakEvents } = net.fabricmc.fabric.api.event.player;

PlayerBlockBreakEvents.BEFORE;
PlayerBlockBreakEvents.AFTER;
PlayerBlockBreakEvents.CANCELLED;

let { AttackBlockCallback } = net.fabricmc.fabric.api.event.player;

AttackBlockCallback.EVENT;

let { UseEntityCallback } = net.fabricmc.fabric.api.event.player;

UseEntityCallback.EVENT;

let { ClientPlayerBlockBreakEvents } =
    net.fabricmc.fabric.api.event.client.player;

ClientPlayerBlockBreakEvents.AFTER;

let { ClientPreAttackCallback } = net.fabricmc.fabric.api.event.client.player;

ClientPreAttackCallback.EVENT;
