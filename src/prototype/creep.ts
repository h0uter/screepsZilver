

Creep.prototype.identifyJob =
  function () {
    if (Game.time % 5 === 0) {
      let idSymbol: string;
      const idSymbols: any = {
        jobConstruct () {idSymbol = '🔨'},
        jobHarvest () {idSymbol = '🌾'},
        haul () {idSymbol = '🚛'},
        mine () {idSymbol = '⛏'},
        jobMaintenance () {idSymbol = '🔧'},
        jobUpgrade () {idSymbol = '⚡'},
        jobFortify () {idSymbol = '🛡'},
        default () {idSymbol = '**'}
      };
      (idSymbols[this.memory.job] || idSymbols.default())();
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
      this.memory.job = false;
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
