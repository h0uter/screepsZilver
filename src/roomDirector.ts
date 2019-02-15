import * as Config from "./utils/config"

export default {
  run(room: Room): void {
    room.updateRoomModel();

    Object.keys(Game.creeps).forEach(name => {
      const creep = Game.creeps[name];

      if (creep.room.name === room.name) {
        // if (creep.memory.role === 'harvester') {
        //   roleHarvester.run(creep);
        // } else if (creep.memory.role === 'engineer') {
        //   roleEngineer.run(creep);
        // } else if (creep.memory.role === 'miner') {
        //   roleMiner.run(creep);
        // }

        // ['role' + _.capitalize(creep.memory.role)].run(creep)

        Config.ROLES[creep.memory.role].run(creep)

      }
    });

    Object.keys(Game.spawns).forEach(name => {
      if (Game.spawns[name].room.name === room.name) {
  
        // // DEBUG
        // Game.spawns[name].bodyConstructor([5,0,1],[1,0,0], [5,5,5]);
        // // DEBUG


        Object.keys(Config.POPULATION_SETTINGS).forEach(role => {
          const populationCount = room.memory.rolesInRoom[role] || 0;
          // lg(role + ': ' + populationCount);
          
          if (populationCount < Config.POPULATION_SETTINGS[role]) {
            lg('spawning: ' + role);
            Game.spawns[name].produceCreep(role as Role)
          }
        })


      }
    })
  }
}
