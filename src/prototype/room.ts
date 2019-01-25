import * as roleHarvester from '../roles/roleHarvester'

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
        roleHarvester.run(creep);
      }
    });

    Object.keys(Game.spawns).forEach(name => {
      console.log(Game.spawns[name]);
      Game.spawns[name].run()

    });

  },
});


