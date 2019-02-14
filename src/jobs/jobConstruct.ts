import Tasks from "creep-tasks";
import * as Arithmetic from '../utils/functions'

// find construction sites and sort them based on a chosen order
export default function jobConstruct(creep: Creep): void {
  let targets: ConstructionSite[] = creep.room.find(FIND_CONSTRUCTION_SITES);
  lg('construct targets: ' + targets.length);
  if (targets.length) {

    // TODO: combine into 1 function that takes care of priority

    // sort construction sites based on provided order
    targets = Arithmetic.assignPriority(targets, 'tower', 'extension', 'container', 'road', 'constructedWall');
    
    // sort them based on priority and return array with only highest priority structure types
    targets = Arithmetic.prioritizeType(targets);
    // console.log('target: ' + target + ' | targets: ' + targets);

    // sort them based on progession
    targets.sort((a, b) => a.progress - b.progress);
    // reduce to array of the 3 most progressed
    if (targets.length > 3) {
      targets = targets.splice(2)
    }
    // choose the one which is closest
    const target = creep.pos.findClosestByPath(targets);

    // if a target has been found, assign build task with that target
    if (target) {
      creep.task = Tasks.build(target)
    }
  // if there are no construcution jobs, delete the creep's job memory
  } else {
    delete creep.memory.job
  }
}