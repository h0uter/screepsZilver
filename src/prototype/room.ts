import * as roleHarvester from '../roles/roleHarvester'
import * as roleUpgrader from '../roles/roleUpgrader'
// function lg(text: any) : void {
//   console.log(text);
// }


Object.assign(Room.prototype, {
  run() {
    // lg(this + " is it lg");

    console.log(this + ' is it');
    Object.keys(Game.creeps).forEach(name => {
      const creep = Game.creeps[name];

      if (creep.room === this) {
        if (creep.memory.role === 'harvester') {
          roleHarvester.run(creep);
        } else if  (creep.memory.role === 'upgrader') {
          roleUpgrader.run(creep);
        }
      }
    });

    Object.keys(Game.spawns).forEach(name => {
      console.log(Game.spawns[name]);
      Game.spawns[name].run()

    });

  },
});

