import roleHarvester from '../roles/roleHarvester'


function lg(text: any) : void {
  console.log(text);
}


Object.assign(Room.prototype, {
  run() {
    lg(this + " is it")

    Object.keys(Game.creeps).forEach(name => {
      let creep = Game.creeps[name];

      // if (creep.room === this) {
      //   roleHarvester.run(creep);
      // }
    });

  },
});


