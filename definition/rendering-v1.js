let { addEvent } = require("listener");

let { WorldRenderEvents } = net.fabricmc.fabric.api.client.rendering.v1;

addEvent(
    "WorldRenderStartEvent",
    WorldRenderEvents.START,
    WorldRenderEvents.Start,
    "onStart",
);

addEvent(
    "WorldRenderAfterSetupEvent",
    WorldRenderEvents.AFTER_SETUP,
    WorldRenderEvents.AfterSetup,
    "afterSetup",
);

addEvent(
    "WorldRenderBeforeEntitiesEvent",
    WorldRenderEvents.BEFORE_ENTITIES,
    WorldRenderEvents.BeforeEntities,
    "beforeEntities",
);

addEvent(
    "WorldRenderAfterEntitiesEvent",
    WorldRenderEvents.AFTER_ENTITIES,
    WorldRenderEvents.AfterEntities,
    "afterEntities",
);

addEvent(
    "WorldRenderBeforeBlockOutlineEvent",
    WorldRenderEvents.BEFORE_BLOCK_OUTLINE,
    WorldRenderEvents.BeforeBlockOutline,
    "beforeBlockOutline",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "WorldRenderBlockOutlineEvent",
    WorldRenderEvents.BLOCK_OUTLINE,
    WorldRenderEvents.BlockOutline,
    "blockOutline",
);

addEvent(
    "WorldRenderBeforeDebugRenderEvent",
    WorldRenderEvents.BEFORE_DEBUG_RENDER,
    WorldRenderEvents.BeforeDebugRender,
    "beforeDebugRender",
);

addEvent(
    "WorldRenderAfterTranslucentEvent",
    WorldRenderEvents.AFTER_TRANSLUCENT,
    WorldRenderEvents.AfterTranslucent,
    "afterTranslucent",
);

addEvent(
    "WorldRenderLastEvent",
    WorldRenderEvents.LAST,
    WorldRenderEvents.Last,
    "onLast",
);

addEvent(
    "WorldRenderEndEvent",
    WorldRenderEvents.END,
    WorldRenderEvents.End,
    "onEnd",
);

let { TooltipComponentCallback } = net.fabricmc.fabric.api.client.rendering.v1;

addEvent(
    "TooltipComponentEvent",
    TooltipComponentCallback.EVENT,
    TooltipComponentCallback,
    "getComponent",
    (res, _) => res ?? null,
    (res, args) => (res == null ? [true, args] : [false, res]),
);

let { DrawItemStackOverlayCallback } =
    net.fabricmc.fabric.api.client.rendering.v1;

addEvent(
    "DrawItemStackOverlayEvent",
    DrawItemStackOverlayCallback.EVENT,
    DrawItemStackOverlayCallback,
    "onDrawItemStackOverlay",
);

let { LivingEntityFeatureRenderEvents } =
    net.fabricmc.fabric.api.client.rendering.v1;

addEvent(
    "LivingEntityAllowCapeRenderEvent",
    LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER,
    LivingEntityFeatureRenderEvents,
    "allowCapeRender",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

let { HudRenderCallback } = net.fabricmc.fabric.api.client.rendering.v1;

addEvent(
    "HudRenderEvent",
    HudRenderCallback.EVENT,
    HudRenderCallback,
    "onHudRender",
);

let { GatherDebugTextEvents } = net.fabricmc.fabric.api.client.rendering.v1;

addEvent(
    "GatherLeftDebugTextEvent",
    GatherDebugTextEvents.LEFT,
    GatherDebugTextEvents.Left,
    "gatherLeftDebugText",
);

addEvent(
    "GatherRightDebugTextEvent",
    GatherDebugTextEvents.RIGHT,
    GatherDebugTextEvents.Right,
    "gatherRightDebugText",
);

let { LivingEntityFeatureRendererRegistrationCallback } =
    net.fabricmc.fabric.api.client.rendering.v1;

addEvent(
    "LivingEntityRendererRegistrationEvent",
    LivingEntityFeatureRendererRegistrationCallback.EVENT,
    LivingEntityFeatureRenderEvents,
    "register",
);
