/**
 * Runs all creep actions.
 * @export
 * @param {Creep} creep
 */
export function run(creep: Creep): void {
  // creep.say('yo whaddup');
  creep.identifyJob();
  creep.fullState();

  if (creep.isIdle) {
    if (creep.memory.full) {
      creep.assignJob('jobRestock');
    } else {
      // creep.harvestSource()
      creep.assignJob('jobHarvest');
    }
    if (!!creep.memory.job) {
      creep.executeJobLogic()
    }
  }
  creep.run()
}
