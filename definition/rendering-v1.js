let { WorldRenderEvents } = net.fabricmc.fabric.api.client.rendering.v1;

WorldRenderEvents.START;
WorldRenderEvents.AFTER_SETUP;
WorldRenderEvents.BEFORE_ENTITIES;
WorldRenderEvents.AFTER_ENTITIES;
WorldRenderEvents.BEFORE_BLOCK_OUTLINE;
WorldRenderEvents.BLOCK_OUTLINE;
WorldRenderEvents.BEFORE_DEBUG_RENDER;
WorldRenderEvents.AFTER_TRANSLUCENT;
WorldRenderEvents.LAST;
WorldRenderEvents.END;

let { TooltipComponentCallback } = net.fabricmc.fabric.api.client.rendering.v1;

TooltipComponentCallback.EVENT;

let { DrawItemStackOverlayCallback } =
    net.fabricmc.fabric.api.client.rendering.v1;

DrawItemStackOverlayCallback.EVENT;

let { LivingEntityFeatureRenderEvents } =
    net.fabricmc.fabric.api.client.rendering.v1;

LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER;

let { HudRenderCallback } = net.fabricmc.fabric.api.client.rendering.v1;

HudRenderCallback.EVENT;

let { GatherDebugTextEvents } = net.fabricmc.fabric.api.client.rendering.v1;

GatherDebugTextEvents.LEFT;
GatherDebugTextEvents.RIGHT;

let { LivingEntityFeatureRendererRegistrationCallback } =
    net.fabricmc.fabric.api.client.rendering.v1;

LivingEntityFeatureRendererRegistrationCallback.EVENT;
