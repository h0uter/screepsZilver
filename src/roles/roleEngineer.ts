import Tasks from 'creep-tasks'
import * as Arithmetic from '../utils/functions'

/**
 * Runs all creep actions.
 *
 * @export
 * @param {Creep} creep
 */
export function run(creep: Creep): void {
  // creep.memory.job = 'upgrade';
  creep.fullState();
  // creep.say('yo Im an engineer');


  if (creep.isIdle) {
    if (creep.memory.full) {
      // JOB assignment from room info
      const jobList = creep.room.memory.jobList;

      if ((!jobList.jobConstruct || jobList.jobConstruct < 2) && creep.room.memory.constructionSites.length > 0)  {
        creep.assignJob('jobConstruct');
      // } else if (!jobList.jobUpgrade || jobList.jobUpgrade < 2) {
      } else {
        creep.assignJob('jobUpgrade');
      }

      if (!!creep.memory.job) {
        creep.executeJobLogic()
      }
    } else {
      creep.harvestSource()
    }
  }
  creep.identifyJob();
  creep.run();
}

export function jobUpgrade(creep: Creep): void {
  const controller = Game.rooms[creep.memory.home].controller;
  if (controller) {
    creep.task = Tasks.upgrade(controller);
  }
}

export function jobConstruct(creep: Creep): void {
  let targets: ConstructionSite[] = creep.room.find(FIND_CONSTRUCTION_SITES);
  lg('construct targets: ' + targets.length);
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
  } else {
    delete creep.memory.job
  }
}
