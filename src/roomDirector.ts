import * as Config from "./utils/config"

// TODO: roomDirector job asssignment

export default {
  run(room: Room): void {
    room.updateRoomModel();

    Object.keys(Game.creeps).forEach(name => {
      const creep = Game.creeps[name];

      if (creep.room.name === room.name) {
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
