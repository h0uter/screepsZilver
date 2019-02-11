import Tasks from 'creep-tasks'
import * as Arithmetic from '../utils/functions'

export default function jobRestock(creep: Creep): void {
    let targets = creep.room.find(FIND_MY_STRUCTURES, {
      filter: (s) => {
        return (
          ((s.structureType === STRUCTURE_SPAWN || s.structureType === STRUCTURE_EXTENSION || s.structureType === STRUCTURE_TOWER)
            && s.energy < s.energyCapacity)
          || (s.structureType === STRUCTURE_STORAGE && s.storeCapacity > s.store.energy)
  
        );
      }
    });
    // lgO(targets);
    if (targets.length) {
      targets = Arithmetic.assignPriority(targets, 'tower', 'extension', 'spawn', 'storage');
      targets = Arithmetic.prioritizeType(targets);
      const target = creep.pos.findClosestByPath(targets) as transferTargetType;
      // lgO(target);
      creep.memory.target = target;
      creep.task = Tasks.transfer(target);
    } else {
      creep.assignJob('jobUpgrade')
    }
  }