let { EntitySleepEvents } = net.fabricmc.fabric.api.entity.event.v1;

EntitySleepEvents.ALLOW_SLEEPING;
EntitySleepEvents.START_SLEEPING;
EntitySleepEvents.STOP_SLEEPING;
EntitySleepEvents.ALLOW_BED;
EntitySleepEvents.ALLOW_SLEEP_TIME;
EntitySleepEvents.ALLOW_NEARBY_MONSTERS;
EntitySleepEvents.ALLOW_RESETTING_TIME;
EntitySleepEvents.MODIFY_SLEEPING_DIRECTION;
EntitySleepEvents.ALLOW_SETTING_SPAWN;
EntitySleepEvents.SET_BED_OCCUPATION_STATE;
EntitySleepEvents.MODIFY_WAKE_UP_POSITION;

let { EntityElytraEvents } = net.fabricmc.fabric.api.entity.event.v1;

EntityElytraEvents.ALLOW;
EntityElytraEvents.CUSTOM;

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
