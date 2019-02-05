StructureSpawn.prototype.buildCreep = function (role: string) {
  
  let body: BodyPartConstant[] = [WORK, CARRY, MOVE];
  const newName = _.capitalize(role) + Game.time;
  

  if (this.room.memory.roomEnergyPercentage > 0.7) {
    const spawnEnergy = this.room.energyAvailable;
    body = [];
    const WCM = {
      balanced: [1, 1, 1],
      miner: [1, 0, 1]

    };

    const baseCost = {
      balanced: 200
    };

    const bodyBuilder = {
      balanced () {
        return [1,1,1].map(x => x * _.floor(spawnEnergy / baseCost.balanced));
      },
    };
    // lg(bodyBuilder.balanced());

    const workParts = _.floor(spawnEnergy/baseCost.balanced);
    const carryParts = _.floor(spawnEnergy/baseCost.balanced);
    const moveParts = _.floor(spawnEnergy/baseCost.balanced);

    for (let i = 0; i < workParts; i++) {body.push(WORK)}
    for (let i = 0; i < carryParts; i++) {body.push(CARRY)}
    for (let i = 0; i < moveParts; i++) {body.push(MOVE)}
  }

  return this.spawnCreep(body, newName, {
    memory: {
      full: false,
      home: this.room.name,
      role,
      task: null,
    }
  })
};
