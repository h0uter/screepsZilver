export function run(creep: Creep): void {

  // if a job is in memory execute that job
  if (!!creep.memory.job) {
    creep.executeJobLogic();
  
  // otherwise find a source and load it in the creep's memory
  } else {
    if (!creep.memory.source) {
      const assignSource = function() {
        const sources = creep.room.find(FIND_SOURCES);

        if (_.filter(Game.creeps, c => c.memory.source === sources[0].id).length === 0) {
          return sources[0].id;
        } else if (_.filter(Game.creeps, c => c.memory.source === sources[1].id).length === 0) {
          return sources[1].id;
        } else {
          return null;
        }
      };
      creep.memory.source = assignSource();
    }
  }


  if (creep.isIdle) {
    if (creep.memory.full) {
      creep.assignJob("jobRestock");
    } else {
      // creep.harvestSource()
      creep.assignJob("jobHarvest");
    }
    if (!!creep.memory.job) {
      creep.executeJobLogic();
    }
  }
  creep.identifyJob();
  creep.run();
}
