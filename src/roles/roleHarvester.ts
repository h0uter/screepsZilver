import Tasks from 'creep-tasks'

/**
 * Runs all creep actions.
 *
 * @export
 * @param {Creep} creep
 */
export function run(creep: Creep): void {
  creep.say('yo whaddup');
  creep.identifyJob();
  creep.fullState();

  if (creep.isIdle) {
    if (creep.memory.full) {

      const targets = creep.room.find(FIND_MY_SPAWNS);
      if (targets.length) {
        const target = creep.pos.findClosestByPath(targets);
        if (target) {
          creep.task = Tasks.transfer(target);
          creep.memory.job = 'jobHaul';
        }
      }
    } else {
      creep.memory.job = 'jobHarvest';
      creep.harvestSource()
    }
  }

  creep.run()
}
