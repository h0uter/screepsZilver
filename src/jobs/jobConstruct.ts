import Tasks from "creep-tasks";
import * as Arithmetic from '../utils/functions'


export function jobConstuct(creep: Creep): void {
  let targets: ConstructionSite[] = creep.room.find(FIND_CONSTRUCTION_SITES);
  if (targets.length) {

    // TODO combine into 1 function that takes care of priority
    targets = Arithmetic.assignPriority(targets, 'tower', 'extension', 'container', 'road', 'constructedWall');
    targets = Arithmetic.prioritizeType(targets);
    // console.log('target: ' + target + ' | targets: ' + targets);

    targets.sort((a, b) => a.progress - b.progress);
    if (targets.length > 3) {
      targets = targets.splice(2)
    }
    const target = creep.pos.findClosestByPath(targets);

    if (target) {
      creep.task = Tasks.build(target)
    }
  }
}
