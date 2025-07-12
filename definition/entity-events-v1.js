let { addEvent } = require("listener");

let { ActionResult } = Yarn.net.minecraft.util;
let { EntitySleepEvents } = net.fabricmc.fabric.api.entity.event.v1;

addEvent(
    "EntityAllowSleepingEvent",
    EntitySleepEvents.ALLOW_SLEEPING,
    EntitySleepEvents.AllowSleeping,
    "allowSleeping",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "EntityStartSleepingEvent",
    EntitySleepEvents.START_SLEEPING,
    EntitySleepEvents.StartSleeping,
    "onStartSleeping",
);

addEvent(
    "EntityStopSleepingEvent",
    EntitySleepEvents.STOP_SLEEPING,
    EntitySleepEvents.StopSleeping,
    "onStopSleeping",
);

addEvent(
    "EntityAllowBedEvent",
    EntitySleepEvents.ALLOW_BED,
    EntitySleepEvents.AllowBed,
    "allowBed",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

addEvent(
    "EntityAllowSleepTimeEvent",
    EntitySleepEvents.ALLOW_SLEEP_TIME,
    EntitySleepEvents.AllowSleepTime,
    "allowSleepTime",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

addEvent(
    "EntityAllowNearbyMonstersEvent",
    EntitySleepEvents.ALLOW_NEARBY_MONSTERS,
    EntitySleepEvents.AllowNearbyMonsters,
    "allowNearbyMonsters",
    (res, _) => res ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

addEvent(
    "EntityAllowResettingTimeEvent",
    EntitySleepEvents.ALLOW_RESETTING_TIME,
    EntitySleepEvents.AllowResettingTime,
    "allowResettingTime",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "EntityModifySleepingDirectionEvent",
    EntitySleepEvents.MODIFY_SLEEPING_DIRECTION,
    EntitySleepEvents.ModifySleepingDirection,
    "allowResettingTime",
    (res, args) => (res == null ? args[2] : res),
    (res, args) => {
        args[2] = res;
        return args;
    },
);

addEvent(
    "EntityAllowSettingSpawnEvent",
    EntitySleepEvents.ALLOW_SETTING_SPAWN,
    EntitySleepEvents.AllowSettingSpawn,
    "allowSettingSpawn",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "EntitySetBedOccupationStateEvent",
    EntitySleepEvents.SET_BED_OCCUPATION_STATE,
    EntitySleepEvents.SetBedOccupationState,
    "setBedOccupationState",
    (res, _) => res ?? false,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "EntityModifyWaveUpPositionEvent",
    EntitySleepEvents.MODIFY_WAKE_UP_POSITION,
    EntitySleepEvents.ModifyWaveUpPosition,
    "modifyWakeUpPosition",
    (res, args) => (res == null ? args[3] : res),
    (res, args) => {
        args[3] = res;
        return args;
    },
);

let { EntityElytraEvents } = net.fabricmc.fabric.api.entity.event.v1;

addEvent(
    "EntityElytraAllowEvent",
    EntityElytraEvents.ALLOW,
    EntityElytraEvents.Allow,
    "allowElytraFlight",
    (res, _) => res ?? true,
    (res, args) => (res ? [true, args] : [false, false]),
);

addEvent(
    "EntityElytraCustomEvent",
    EntityElytraEvents.CUSTOM,
    EntityElytraEvents.Custom,
    "useCustomElytra",
    (res, _) => res ?? false,
    (res, args) => (res ? [false, true] : [true, args]),
);

let { ServerPlayerEvents } = net.fabricmc.fabric.api.entity.event.v1;

ServerPlayerEvents.COPY_FROM;
ServerPlayerEvents.AFTER_RESPAWN;
ServerPlayerEvents.JOIN;
ServerPlayerEvents.LEAVE;
ServerPlayerEvents.ALLOW_DEATH;

let { ServerLivingEntityEvents } = net.fabricmc.fabric.api.entity.event.v1;

ServerLivingEntityEvents.ALLOW_DAMAGE;
ServerLivingEntityEvents.AFTER_DAMAGE;
ServerLivingEntityEvents.ALLOW_DEATH;
ServerLivingEntityEvents.AFTER_DEATH;
ServerLivingEntityEvents.MOB_CONVERSION;

let { ServerEntityCombatEvents } = net.fabricmc.fabric.api.entity.event.v1;

ServerEntityCombatEvents.AFTER_KILLED_OTHER_ENTITY;

let { ServerEntityWorldChangeEvents } = net.fabricmc.fabric.api.entity.event.v1;

ServerEntityWorldChangeEvents.AFTER_ENTITY_CHANGE_WORLD;
ServerEntityWorldChangeEvents.AFTER_PLAYER_CHANGE_WORLD;
