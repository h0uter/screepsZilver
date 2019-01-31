import Tasks from "creep-tasks";


/**
 * Runs all creep actions.
 *
 * @export
 * @param {Creep} creep
 */
export function jobConstuct(creep: Creep): void {
  let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
  if (targets.length) {

    targets = assignPriority(targets, 'tower', 'extension', 'container', 'road', 'constructedWall');
    targets = prioritizeType(targets);
    let target = creep.findMostProgressed(targets);
    // console.log('target: ' + target + ' | targets: ' + targets);
    creep.task = Tasks.build(target)
  }
}
