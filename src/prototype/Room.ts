Room.prototype.howManyOfEach = function(key: string) : object {
  // counts the occurance of the specified key in creep memory per room
  // getJobs en get Population zijn het zelfde
  // TODO mooie lodash oplossing hiervoor vinden
  const list: KeyNumberObject = {};
  for (const name in Game.creeps) {
    const creep = Game.creeps[name];
    if (creep.room === this) {
      list[creep.memory[key]] = list[creep.memory[key]] + 1 || 1;
    }
  }

  // lgO(list);
  return list
};

Room.prototype.getRCL = function() {
  if (this.controller && this.controller.my) {
    return this.controller.level
  } else {
    return 0
  }
};

Room.prototype.monitor = function () {
  //INFO
  // TODO job targets: repair, jobConstruct

  this.memory = {
    // creeps: this.roomCreeps(),
    RCL: this.getRCL(),
    constructionSites: this.find(FIND_CONSTRUCTION_SITES),
    roleList: this.howManyOfEach('role'),
    jobList: this.howManyOfEach('job'),
    roomEnergyPercentage: _.floor(this.energyAvailable / this.energyCapacityAvailable,2),

}
};
