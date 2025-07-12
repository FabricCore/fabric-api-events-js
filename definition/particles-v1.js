let { addEvent } = require("listener");

let { ParticleRenderEvents } = net.fabricmc.fabric.api.client.particle.v1;

addEvent(
    "ParticleAllowBlockDustTintEvent",
    ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT,
    ParticleRenderEvents.AllowBlockDustTint,
    "allowBlockDustTint",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);
