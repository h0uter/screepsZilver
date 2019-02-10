import * as roleEngineer from "./roles/roleEngineer";
import * as roleHarvester from "./roles/roleHarvester";

export default {
  run(room: Room): void {
    // lg("Rdirector running, huts");

    Object.keys(Game.creeps).forEach(name => {
      const creep = Game.creeps[name];

      if (creep.room.name === room.name) {
        if (creep.memory.role === 'harvester') {
          roleHarvester.run(creep);
        } else if (creep.memory.role === 'engineer') {
          roleEngineer.run(creep);
        }
      }
    });

    Object.keys(Game.spawns).forEach(name => {
      if (Game.spawns[name].room.name === room.name) {
        
        const populationSetting: KeyNumberObject = {
          engineer: 4,
          harvester: 3,
          miner: 0,
        };

        // Object.keys(room.memory.roleList).forEach(role => {
        Object.keys(populationSetting).forEach(role => {
          lg(role + ': ' + room.memory.roleList[role]);

          const populationCount = room.memory.roleList[role] || 0;

          if (populationCount < populationSetting[role]) {
            lg('spawning: ' + role);
            Game.spawns[name].buildCreep(role)
          }
        })
      }
    })
  }
}
