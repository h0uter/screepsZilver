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
  const harvesters = _.filter(Game.creeps, (creep) => (creep.memory.role === 'harvester'));
  const upgraders = _.filter(Game.creeps, (creep) => (creep.memory.role === 'upgrader'));
  const engineers = _.filter(Game.creeps, (creep) => (creep.memory.role === 'engineer'));


  if (harvesters.length <= 2) {
    this.buildCreep('harvester')
  } else if (upgraders.length <= 1 ) {
    this.buildCreep('upgrader')
  } else if (engineers.length <= 4 ) {
    this.buildCreep('engineer')
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
