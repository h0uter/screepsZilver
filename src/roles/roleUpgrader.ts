import Tasks from 'creep-tasks'

/**
 * Runs all creep actions.
 * @export
 * @param {Creep} creep
 */
export function run(creep: Creep): void {
  creep.identifyJob();
  creep.fullState();

  if (creep.isIdle) {
    if (creep.memory.full) {
      const controller = Game.rooms[creep.memory.home].controller;
      if (controller) {
        creep.task = Tasks.upgrade(controller);
      }
    } else {
      creep.memory.job = 'jobHarvest';
      creep.harvestSource()
    }
  }

  creep.run()
}
