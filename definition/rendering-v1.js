let { addEvent } = require("listener");

let { WorldRenderEvents } = net.fabricmc.fabric.api.client.rendering.v1;
let WorldRenderEventsFields = new Set(Object.keys(WorldRenderEvents));

if (WorldRenderEventsFields.has("START"))
    addEvent(
        "WorldRenderStartEvent",
        WorldRenderEvents.START,
        WorldRenderEvents.Start,
        "onStart",
    );

if (WorldRenderEventsFields.has("AFTER_SETUP"))
    addEvent(
        "WorldRenderAfterSetupEvent",
        WorldRenderEvents.AFTER_SETUP,
        WorldRenderEvents.AfterSetup,
        "afterSetup",
    );

if (WorldRenderEventsFields.has("BEFORE_ENTITIES"))
    addEvent(
        "WorldRenderBeforeEntitiesEvent",
        WorldRenderEvents.BEFORE_ENTITIES,
        WorldRenderEvents.BeforeEntities,
        "beforeEntities",
    );

if (WorldRenderEventsFields.has("AFTER_ENTITIES"))
    addEvent(
        "WorldRenderAfterEntitiesEvent",
        WorldRenderEvents.AFTER_ENTITIES,
        WorldRenderEvents.AfterEntities,
        "afterEntities",
    );

if (WorldRenderEventsFields.has("BEFORE_BLOCK_OUTLINE"))
    addEvent(
        "WorldRenderBeforeBlockOutlineEvent",
        WorldRenderEvents.BEFORE_BLOCK_OUTLINE,
        WorldRenderEvents.BeforeBlockOutline,
        "beforeBlockOutline",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );

if (WorldRenderEventsFields.has("BLOCK_OUTLINE"))
    addEvent(
        "WorldRenderBlockOutlineEvent",
        WorldRenderEvents.BLOCK_OUTLINE,
        WorldRenderEvents.BlockOutline,
        "blockOutline",
    );

if (WorldRenderEventsFields.has("BEFORE_DEBUG_RENDER"))
    addEvent(
        "WorldRenderBeforeDebugRenderEvent",
        WorldRenderEvents.BEFORE_DEBUG_RENDER,
        WorldRenderEvents.DebugRender,
        "beforeDebugRender",
    );

if (WorldRenderEventsFields.has("AFTER_TRANSLUCENT"))
    addEvent(
        "WorldRenderAfterTranslucentEvent",
        WorldRenderEvents.AFTER_TRANSLUCENT,
        WorldRenderEvents.AfterTranslucent,
        "afterTranslucent",
    );

if (WorldRenderEventsFields.has("LAST"))
    addEvent(
        "WorldRenderLastEvent",
        WorldRenderEvents.LAST,
        WorldRenderEvents.Last,
        "onLast",
    );

if (WorldRenderEventsFields.has("END"))
    addEvent(
        "WorldRenderEndEvent",
        WorldRenderEvents.END,
        WorldRenderEvents.End,
        "onEnd",
    );

let { TooltipComponentCallback } = net.fabricmc.fabric.api.client.rendering.v1;
let TooltipComponentCallbackFields = new Set(
    Object.keys(TooltipComponentCallback),
);

if (TooltipComponentCallbackFields.has("EVENT"))
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
let DrawItemStackOverlayCallbackFields = new Set(
    Object.keys(DrawItemStackOverlayCallback),
);

if (DrawItemStackOverlayCallbackFields.has("EVENT"))
    addEvent(
        "DrawItemStackOverlayEvent",
        DrawItemStackOverlayCallback.EVENT,
        DrawItemStackOverlayCallback,
        "onDrawItemStackOverlay",
    );

let { LivingEntityFeatureRenderEvents } =
    net.fabricmc.fabric.api.client.rendering.v1;
let LivingEntityFeatureRenderEventsFields = new Set(
    Object.keys(LivingEntityFeatureRenderEvents),
);

if (LivingEntityFeatureRenderEventsFields.has("ALLOW_CAPE_RENDER"))
    addEvent(
        "LivingEntityAllowCapeRenderEvent",
        LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER,
        LivingEntityFeatureRenderEvents,
        "allowCapeRender",
        (res, _) => res ?? true,
        (res, args) => (res ? [true, args] : [false, false]),
    );

let { HudRenderCallback } = net.fabricmc.fabric.api.client.rendering.v1;
let HudRenderCallbackFields = new Set(Object.keys(HudRenderCallback));

if (HudRenderCallbackFields.has("EVENT"))
    addEvent(
        "HudRenderEvent",
        HudRenderCallback.EVENT,
        HudRenderCallback,
        "onHudRender",
    );

let { GatherDebugTextEvents } = net.fabricmc.fabric.api.client.rendering.v1;
let GatherDebugTextEventsFields = new Set(Object.keys(GatherDebugTextEvents));

if (GatherDebugTextEventsFields.has("LEFT"))
    addEvent(
        "GatherLeftDebugTextEvent",
        GatherDebugTextEvents.LEFT,
        GatherDebugTextEvents.Left,
        "gatherLeftDebugText",
    );

if (GatherDebugTextEventsFields.has("RIGHT"))
    addEvent(
        "GatherRightDebugTextEvent",
        GatherDebugTextEvents.RIGHT,
        GatherDebugTextEvents.Right,
        "gatherRightDebugText",
    );

let { LivingEntityFeatureRendererRegistrationCallback } =
    net.fabricmc.fabric.api.client.rendering.v1;
let LivingEntityFeatureRendererRegistrationCallbackFields = new Set(
    Object.keys(LivingEntityFeatureRendererRegistrationCallback),
);

if (LivingEntityFeatureRendererRegistrationCallbackFields.has("EVENT"))
    addEvent(
        "LivingEntityRendererRegistrationEvent",
        LivingEntityFeatureRendererRegistrationCallback.EVENT,
        LivingEntityFeatureRenderEvents,
        "register",
    );
