let { addEvent } = require("listener");

let { UseItemCallback } = net.fabricmc.fabric.api.event.player;

addEvent(
    "UseItemEvent",
    UseItemCallback.EVENT,
    UseItemCallback,
    "interact",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

let { UseBlockCallback } = net.fabricmc.fabric.api.event.player;

addEvent(
    "UseBlockEvent",
    UseBlockCallback.EVENT,
    UseBlockCallback,
    "interact",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

let { PlayerPickItemEvents } = net.fabricmc.fabric.api.event.player;

addEvent(
    "PlayerPickBlockItemEvent",
    PlayerPickItemEvents.BLOCK,
    PlayerPickItemEvents.PickItemFromBlock,
    "onPickItemFromBlock",
    (res, _) => res ?? null,
    (res, args) => (res == null ? [true, args] : [false, res]),
);

addEvent(
    "PlayerPickEntityItemEvent",
    PlayerPickItemEvents.ENTITY,
    PlayerPickItemEvents.PickItemFromEntity,
    "onPickItemFromEntity",
    (res, _) => res ?? null,
    (res, args) => (res == null ? [true, args] : [false, res]),
);

let { AttackEntityCallback } = net.fabricmc.fabric.api.event.player;

addEvent(
    "AttackEntityEvent",
    AttackEntityCallback.EVENT,
    AttackEntityCallback,
    "interact",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

let { PlayerBlockBreakEvents } = net.fabricmc.fabric.api.event.player;

addEvent(
    "PlayerBeforeBlockBreakEvent",
    PlayerBlockBreakEvents.BEFORE,
    PlayerBlockBreakEvents.Before,
    "beforeBlockBreak",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "PlayerAfterBlockBreakEvent",
    PlayerBlockBreakEvents.AFTER,
    PlayerBlockBreakEvents.After,
    "afterBlockBreak",
);

addEvent(
    "PlayerCancelledBlockBreakEvent",
    PlayerBlockBreakEvents.CANCELED,
    PlayerBlockBreakEvents.Canceled,
    "onBlockBreakCanceled",
);

let { AttackBlockCallback } = net.fabricmc.fabric.api.event.player;

addEvent(
    "AttackBlockEvent",
    AttackBlockCallback.EVENT,
    AttackBlockCallback,
    "interact",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

let { UseEntityCallback } = net.fabricmc.fabric.api.event.player;

addEvent(
    "UseEntityEvent",
    UseEntityCallback.EVENT,
    UseEntityCallback,
    "interact",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

let { ClientPlayerBlockBreakEvents } =
    net.fabricmc.fabric.api.event.client.player;

addEvent(
    "ClientPlayerAfterBlockBreakEvent",
    ClientPlayerBlockBreakEvents.AFTER,
    ClientPlayerBlockBreakEvents.After,
    "afterBlockBreak",
);

let { ClientPreAttackCallback } = net.fabricmc.fabric.api.event.client.player;

addEvent(
    "ClientPreAttackEvent",
    ClientPreAttackCallback.EVENT,
    ClientPreAttackCallback,
    "onClientPlayerPreAttack",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);
