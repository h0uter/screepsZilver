
export function run(creep: Creep): void {
  if (!!creep.memory.job) {
    creep.executeJobLogic();
  } else {
    creep.assignJob("jobMine");
  }
  creep.identifyJob();
}
