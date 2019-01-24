Object.assign(StructureSpawn.prototype, {
  run() {

    if (_.filter(Game.creeps, (creep) => (creep.memory.home === this.room.name)).length <= 1) {
      lg('bijna uitgestorven');
      this.buildCreep('harvester', 200)
    }
  },
});

StructureSpawn.prototype.buildCreep = function (role: string) {
  
  const body = [WORK, CARRY, MOVE];

  const newName = _.capitalize(role) + Game.time;

  return this.spawnCreep(body, newName, {
    memory: {
      role
    }
  })
};
