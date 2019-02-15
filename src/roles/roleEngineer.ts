export function run(creep: Creep): void {
  creep.fullState();

  if (creep.isIdle) {
    if (creep.memory.full) {

      // TODO: job assignment directed by roomDirector
      const jobList = creep.room.memory.jobsInRoom;

      if ((!jobList.jobConstruct || jobList.jobConstruct < 2) && creep.room.memory.constructionSites.length > 0) {
        creep.assignJob("jobConstruct");
      } else {
        creep.assignJob("jobUpgrade");
      }
    } else {
      // TODO: create a job getEnergyFromContainer
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
