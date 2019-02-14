export function run(creep: Creep): void {
  // update full status
  creep.fullState();

  // when the creep is idle assign it to restock when full or to harvest energy when not full, then execute it's job
  if (creep.isIdle) {
    if (creep.memory.full) {
      creep.assignJob("jobRestock");
    } else {
      creep.assignJob("jobHarvest");
    }
    if (!!creep.memory.job) {
      creep.executeJobLogic();
    }
  }
  // identify its job
  creep.identifyJob();

  // run the Task assigned from the job
  creep.run();
}
