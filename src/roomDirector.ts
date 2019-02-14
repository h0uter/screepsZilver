import * as roleEngineer from "./roles/roleEngineer";
import * as roleHarvester from "./roles/roleHarvester";
import * as roleMiner from './roles/roleMiner';

import * as Config from "./utils/Config"

export default {
  run(room: Room): void {
    room.updateRoomModel();

    Object.keys(Game.creeps).forEach(name => {
      const creep = Game.creeps[name];

      if (creep.room.name === room.name) {
        if (creep.memory.role === 'harvester') {
          roleHarvester.run(creep);
        } else if (creep.memory.role === 'engineer') {
          roleEngineer.run(creep);
        } else if (creep.memory.role === 'miner') {
          roleMiner.run(creep);
        }
      }
    });

    Object.keys(Game.spawns).forEach(name => {
      if (Game.spawns[name].room.name === room.name) {
  
        // DEBUG
        Game.spawns[name].bodyConstructor([1,0,1],[1,0,0]);
        // DEBUG


        Object.keys(Config.populationSetting).forEach(role => {
          const populationCount = room.memory.rolesInRoom[role] || 0;
          // lg(role + ': ' + populationCount);

          if (populationCount < Config.populationSetting[role]) {
            lg('spawning: ' + role);
            Game.spawns[name].buildCreep(role)
          }
        })
      }
    })
  }
}
