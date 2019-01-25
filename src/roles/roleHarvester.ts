import Tasks from 'creep-tasks'
/**
 * Runs all creep actions.
 *
 * @export
 * @param {Creep} creep
 */
export function run(creep: Creep): void {
  creep.say('yo whaddup')

  let targets = creep.room.find(FIND_MY_STRUCTURES, {
    filter: (s) => {
      return (
        ((s.structureType === STRUCTURE_SPAWN || s.structureType === STRUCTURE_EXTENSION || s.structureType === STRUCTURE_TOWER)
          && s.energy < s.energyCapacity)
        || (s.structureType === STRUCTURE_STORAGE && s.storeCapacity > s.store.energy)

      );
    }
  });
  if (targets.length) {
    if (targets.length) {
      // targets = assignPriority(targets, 'tower', 'extension', 'spawn', 'storage');
      // targets = prioritizeType(targets);
      creep.task = Tasks.transfer(creep.pos.findClosestByPath(targets));
    }
  }
}
