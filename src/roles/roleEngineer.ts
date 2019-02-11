export function run(creep: Creep): void {
  creep.fullState();

  if (creep.isIdle) {
    if (creep.memory.full) {
      // JOB assignment from room info
      const jobList = creep.room.memory.jobsInRoom;

      if ((!jobList.jobConstruct || jobList.jobConstruct < 2) && creep.room.memory.constructionSites.length > 0)  {
        creep.assignJob('jobConstruct');
      // } else if (!jobList.jobUpgrade || jobList.jobUpgrade < 2) {
      } else {
        creep.assignJob('jobUpgrade');
      }
    } else {
      creep.assignJob('jobHarvest');
    }

    if (!!creep.memory.job) {
      creep.executeJobLogic()
    }
  }
  creep.identifyJob();
  creep.run();
}
