import Tasks from 'creep-tasks'

/**
 * Runs all creep actions.
 *
 * @export
 * @param {Creep} creep
 */
export function run(creep: Creep): void {
  // creep.memory.job = 'upgrade';
  creep.fullState();

  if (creep.isIdle) {
    if (creep.memory.full) {
      // JOB assignment from room info
      let jobList = creep.room.memory.jobList;
      if (!jobList.jobUpgrade || jobList.jobUpgrade < 3) {
        creep.memory.job = 'jobUpgrade';
      } else if (!jobList.jobMaintenance || jobList.jobMaintenance < 1) {
        creep.assignJob('jobMaintenance');
      } else if (!jobList.jobFortify || jobList.jobFortify < 1) {
        creep.assignJob('jobFortify');
      }

      if (!!creep.memory.job) {
        creep.executeJobLogic()
      }
    } else {
      creep.harvestSource()
    }
  }
  creep.identifyJob();
  creep.run();
};

module.exports = roleEngineer;
