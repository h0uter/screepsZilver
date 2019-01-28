import Tasks from 'creep-tasks'

Creep.prototype.identifyJob =
  function () {
    if (Game.time % 5 === 0) {
      let idSymbol: string = 'default';
      const idSymbols: any = {
        jobConstruct () {idSymbol = '🔨'},
        jobHarvest () {idSymbol = '🌾'},
        jobHaul () {idSymbol = '🚛'},
        mine () {idSymbol = '⛏'},
        jobMaintenance () {idSymbol = '🔧'},
        jobUpgrade () {idSymbol = '⚡'},
        jobFortify () {idSymbol = '🛡'},
        default () {idSymbol = '**'}
      };
      if (typeof this.memory.job === "string") {
        idSymbols[this.memory.job]();
      } else {
        idSymbols.default()
      }
      // not allowed anymore in ts :(
      // (idSymbols[this.memory.job] || idSymbols.default())();
      this.say('job: ' + idSymbol)
    }
  };

Creep.prototype.fullState =
  function () {
    if (this.memory.full && this.carry.energy === 0) {
      this.memory.full = false;
      // this.clearTargets();
      this.say('🔄');
    }
    if (!this.memory.full && this.carry.energy === this.carryCapacity) {
      this.memory.full = true;
      delete this.memory.job;
      // this.clearTargets();
      this.say('💯');
    }
  };

Creep.prototype.harvestSource = function () {
  const sources = this.room.find(FIND_SOURCES);
  // lg('before: ' + sources);
  sources.sort((a, b) => a.targetedBy.length - b.targetedBy.length);
  // lg('after: ' +sources);
  this.task = Tasks.harvest(sources[0]);
};
