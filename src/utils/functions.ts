
/** @function
 * @param {object} targets
 * @param {string} een
 * @param {string} twee
 * @param {string} drie
 * @param {string} vier
 * @param {string} vijf
 */
export function assignPriority(targets: any[], een: string, twee: string, drie='', vier='', vijf=''): any[] {
  for (let i = 0; i < targets.length; i++) {
    switch (targets[i].structureType) {
      case een:
        targets[i].priority = 1;
        break;
      case twee:
        targets[i].priority = 2;
        break;
      case drie:
        targets[i].priority = 3;
        break;
      case vier:
        targets[i].priority = 4;
        break;
      case vijf:
        targets[i].priority = 5;
        break;
      default:
        targets[i].priority = 6;
        break;
    }
    // console.log(creep.name + ' target: ' + targets[i] + ' | type: ' + targets[i].structureType + ' | priority: ' + targets[i].priority);
  }
  return targets
}

/** @function
 * @param {object} targets
 */
export function prioritizeType(targets: any[]) {
  targets.sort((a, b) => a.priority - b.priority);
  // FIND CLOSEST INSTANCE OF HIGHEST PRIORITY STRUCTURETYPE (vaag als targets maar 1 object heeft)
  targets = _.filter(targets, (t) => t.structureType === targets[0].structureType);
  return targets
}
