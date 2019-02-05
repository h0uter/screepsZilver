StructureSpawn.prototype.buildCreep = function (role: string) {
  
  const body = [WORK, CARRY, MOVE];

  let roomEnergyPercentage = this.room.energyAvailable / this.room.energyCapacityAvailable;

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
