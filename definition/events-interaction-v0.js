let { addEvent } = require("listener");

let { UseItemCallback } = net.fabricmc.fabric.api.event.player;
let UseItemCallbackFields = new Set(Object.keys(UseItemCallback));

if (UseItemCallbackFields.has("EVENT"))
    addEvent(
        "UseItemEvent",
        UseItemCallback.EVENT,
        UseItemCallback,
        "interact",
        (res, _) => res ?? ActionResult.PASS,
        (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
    );

let { UseBlockCallback } = net.fabricmc.fabric.api.event.player;
let UseBlockCallbackFields = new Set(Object.keys(UseBlockCallback));

if (UseBlockCallbackFields.has("EVENT"))
    addEvent(
        "UseBlockEvent",
        UseBlockCallback.EVENT,
        UseBlockCallback,
        "interact",
        (res, _) => res ?? ActionResult.PASS,
        (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
    );

let { PlayerPickItemEvents } = net.fabricmc.fabric.api.event.player;
let PlayerPickItemEventsFields = new Set(Object.keys(PlayerPickItemEvents));

if (PlayerPickItemEventsFields.has("BLOCK"))
    addEvent(
        "PlayerPickBlockItemEvent",
        PlayerPickItemEvents.BLOCK,
        PlayerPickItemEvents.PickItemFromBlock,
        "onPickItemFromBlock",
        (res, _) => res ?? null,
        (res, args) => (res == null ? [true, args] : [false, res]),
    );

if (PlayerPickItemEventsFields.has("ENTITY"))
    addEvent(
        "PlayerPickEntityItemEvent",
        PlayerPickItemEvents.ENTITY,
        PlayerPickItemEvents.PickItemFromEntity,
        "onPickItemFromEntity",
        (res, _) => res ?? null,
        (res, args) => (res == null ? [true, args] : [false, res]),
    );

let { AttackEntityCallback } = net.fabricmc.fabric.api.event.player;
let AttackEntityCallbackFields = new Set(Object.keys(AttackEntityCallback));

if (AttackEntityCallbackFields.has("EVENT"))
    addEvent(
        "AttackEntityEvent",
        AttackEntityCallback.EVENT,
        AttackEntityCallback,
        "interact",
        (res, _) => res ?? ActionResult.PASS,
        (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
    );

let { PlayerBlockBreakEvents } = net.fabricmc.fabric.api.event.player;
let PlayerBlockBreakEventsFields = new Set(Object.keys(PlayerBlockBreakEvents));

if (PlayerBlockBreakEventsFields.has("BEFORE"))
    addEvent(
        "PlayerBeforeBlockBreakEvent",
        PlayerBlockBreakEvents.BEFORE,
        PlayerBlockBreakEvents.Before,
        "beforeBlockBreak",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );

if (PlayerBlockBreakEventsFields.has("AFTER"))
    addEvent(
        "PlayerAfterBlockBreakEvent",
        PlayerBlockBreakEvents.AFTER,
        PlayerBlockBreakEvents.After,
        "afterBlockBreak",
    );

if (PlayerBlockBreakEventsFields.has("CANCELED"))
    addEvent(
        "PlayerCancelledBlockBreakEvent",
        PlayerBlockBreakEvents.CANCELED,
        PlayerBlockBreakEvents.Canceled,
        "onBlockBreakCanceled",
    );

let { AttackBlockCallback } = net.fabricmc.fabric.api.event.player;
let AttackBlockCallbackFields = new Set(Object.keys(AttackBlockCallback));

if (AttackBlockCallbackFields.has("EVENT"))
    addEvent(
        "AttackBlockEvent",
        AttackBlockCallback.EVENT,
        AttackBlockCallback,
        "interact",
        (res, _) => res ?? ActionResult.PASS,
        (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
    );

let { UseEntityCallback } = net.fabricmc.fabric.api.event.player;
let UseEntityCallbackFields = new Set(Object.keys(UseEntityCallback));

if (UseEntityCallbackFields.has("EVENT"))
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
let ClientPlayerBlockBreakEventsFields = new Set(
    Object.keys(ClientPlayerBlockBreakEvents),
);

if (ClientPlayerBlockBreakEventsFields.has("AFTER"))
    addEvent(
        "ClientPlayerAfterBlockBreakEvent",
        ClientPlayerBlockBreakEvents.AFTER,
        ClientPlayerBlockBreakEvents.After,
        "afterBlockBreak",
    );

let { ClientPreAttackCallback } = net.fabricmc.fabric.api.event.client.player;
let ClientPreAttackCallbackFields = new Set(
    Object.keys(ClientPreAttackCallback),
);

if (ClientPreAttackCallbackFields.has("EVENT"))
    addEvent(
        "ClientPreAttackEvent",
        ClientPreAttackCallback.EVENT,
        ClientPreAttackCallback,
        "onClientPlayerPreAttack",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );
