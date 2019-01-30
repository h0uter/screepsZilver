// Object.assign(StructureSpawn.prototype, {
//   run() {
//
//     if (_.filter(Game.creeps, (creep) => (creep.memory.home === this.room.name)).length <= 1) {
//       lg('bijna uitgestorven');
//       this.buildCreep('harvester', 200)
//     }
//   },
// });

StructureSpawn.prototype.run = function () {
  let harvesters = _.filter(Game.creeps, (creep) => (creep.memory.role === 'harvester'));
  let upgraders = _.filter(Game.creeps, (creep) => (creep.memory.role === 'upgrader'));


  if (harvesters.length <= 2) {
    this.buildCreep('harvester')
  } else if (upgraders.length <= 2 ) {
    this.buildCreep('upgrader')
  }
};

StructureSpawn.prototype.buildCreep = function (role: string) {
  
  const body = [WORK, CARRY, MOVE];

  const newName = _.capitalize(role) + Game.time;

  return this.spawnCreep(body, newName, {
    memory: {
      full: false,
      home: this.room.name,
      role,
      task: null,
    }
  })
};
