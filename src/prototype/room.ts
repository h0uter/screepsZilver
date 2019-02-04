import * as roleHarvester from '../roles/roleHarvester'
import * as roleUpgrader from '../roles/roleUpgrader'
import * as roleEngineer from '../roles/roleEngineer'

// function lg(text: any) : void {
//   console.log(text);
// }


Room.prototype.run = function() {
    // lg(this + " is it lg");
    this.monitor()

    //console.log(this + ' is it');
    Object.keys(Game.creeps).forEach(name => {
      const creep = Game.creeps[name];

      if (creep.room === this) {
        if (creep.memory.role === 'harvester') {
          roleHarvester.run(creep);
        } else if  (creep.memory.role === 'upgrader') {
          roleUpgrader.run(creep);
        } else if (creep.memory.role === 'engineer') {
          roleEngineer.run(creep);
        }
      }
    });

    Object.keys(Game.spawns).forEach(name => {
      console.log(Game.spawns[name]);
      Game.spawns[name].run()
    })
  };

Room.prototype.howManyOfEach = function(key: string) : object {
  // counts the occurance of the specified key in creep memory per room
  // getJobs en get Population zijn het zelfde
  // TODO mooie lodash oplossing hiervoor vinden
  const list: Lijst = {};
  for (const name in Game.creeps) {
    const creep = Game.creeps[name];
    if (creep.room === this) {
      list[creep.memory[key]] = list[creep.memory[key]] + 1 || 1;
    }
  }

  // lgO(list);
  return list
};

Room.prototype.monitor = function () {
  //INFO
  //TODO job targets: repair, jobConstruct

  // Memory.rooms[this.name] = {
  this.memory = {
    // creeps: this.roomCreeps(),
    // RCL: this.getRCL(),
    constructionSites: this.find(FIND_CONSTRUCTION_SITES),
    roleList: this.howManyOfEach('role'),
    jobList: this.howManyOfEach('job'),
  }
};
