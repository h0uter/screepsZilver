import { ROLE_BODY_CONFIG } from 'utils/config'

StructureSpawn.prototype.buildCreep = function (role: string) {

  let body: BodyPartConstant[] = [WORK, CARRY, MOVE];
  const newName = _.capitalize(role) + Game.time;


  if (this.room.memory.roomEnergyPercentage > 70) {
    const spawnEnergy = this.room.energyAvailable;
    body = [];

    const WCM = {
      balanced: [1, 1, 1],
      miner: [1, 0, 1]
    };

    const baseCost = {
      balanced: 200
    };

    const workParts = _.floor(spawnEnergy/baseCost.balanced);
    const carryParts = _.floor(spawnEnergy/baseCost.balanced);
    const moveParts = _.floor(spawnEnergy/baseCost.balanced);

    for (let i = 0; i < workParts; i++) {body.push(WORK)}
    for (let i = 0; i < carryParts; i++) {body.push(CARRY)}
    for (let i = 0; i < moveParts; i++) {body.push(MOVE)}
  }

  // if (role === 'miner') {
  //   body = this.bodyConstructor([1,0,1], [1,0,0])
  // }


  lg('spawning: ' + newName + ' with body: ' + body)
  return this.spawnCreep(body, newName, {
    memory: {
      full: false,
      home: this.room.name,
      role,
      task: null,
    }
  })
};

// function bodyCost (body: BodyPartConstant[]) {
//   return body.reduce(function (cost, part) {
//       return cost + BODYPART_COST[part];
//   }, 0);
// }

// builds a body based on 3 arrays of the format WCM. which parts? should they scale? what is the max # of parts?
// standard builds a balanced body
StructureSpawn.prototype.bodyConstructor = function (WCM = [1,1,1], scaling = [1, 1, 1], limit = [5, 5, 5]) {
  const body: BodyPartConstant[] = []
  const WCM_COST = [100, 50, 50];

  const spawnEnergy = this.room.energyAvailable;
  const spawnEnergyCapacity = this.room.energyCapacityAvailable;

  // cost for the base body
  const baseCostMap = WCM.map((x, index) => { // here x = a[index]
    return WCM_COST[index] * x
  });
  lg('_____baseCostMap= '+ baseCostMap);

  const baseCost = baseCostMap.reduce((totalCost, bodypartCost) => totalCost + bodypartCost)
  lg('_____baseCost= '+ baseCost);

  // cost to add a set of the scaling body parts
  const scaleSetCostMap = scaling.map((x, index) => { // here x = a[index]
    return WCM_COST[index] * x
  });
  lg('_____scaleSetCostMap= '+ scaleSetCostMap);

  const scaledSetCost = scaleSetCostMap.reduce((totalCost, bodypartCost) => totalCost + bodypartCost)
  lg('_____scaledSetCost= '+ scaledSetCost);

  // number of scaled sets possible based on room energy
  const numberOfScaledSets = _.floor((spawnEnergy - baseCost) / scaledSetCost);
  _lg('scaled sets possible= ' + numberOfScaledSets)


  // cost of base body + n scaledSets
  const totalScaledBodyCost = baseCost + numberOfScaledSets * scaledSetCost
  _lg('totalScaledBodyCost= ' + totalScaledBodyCost)

  //   number of body parts is the lowest of either 'numberOfScaledSets' or the limit]
  const lichaam = {
    work: _.min([scaling[0]*numberOfScaledSets + WCM[0], limit[0]]),
    carry:  _.min([scaling[1]*numberOfScaledSets + WCM[1], limit[1]]),
    move:  _.min([scaling[2]*numberOfScaledSets + WCM[2], limit[2]]),
  };

  lgO(lichaam)

  for (let i = 0; i < lichaam.work; i++) {body.push(WORK)}
  for (let i = 0; i < lichaam.carry; i++) {body.push(CARRY)}
  for (let i = 0; i < lichaam.move; i++) {body.push(MOVE)}

  lg('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>the body is: ' + body)
  return body
}

StructureSpawn.prototype.produceCreep = function(role: Role) {

  const newName = _.capitalize(role) + Game.time;

  const body: BodyPartConstant[] = this.bodyConstructor(
    ROLE_BODY_CONFIG[role].WCM, ROLE_BODY_CONFIG[role].scaling, ROLE_BODY_CONFIG[role].limit
  );

  lg('spawning: ' + newName + ' with body: ' + body)
  return this.spawnCreep(body, newName, {
    memory: {
      full: false,
      home: this.room.name,
      role,
      task: null,
    }
  })

}
