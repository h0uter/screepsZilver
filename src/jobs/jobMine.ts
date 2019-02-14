export default function jobMine(creep: Creep): void {
  const source: Source | null = Game.getObjectById(creep.memory.source);
  let container = null;

  if (source) {
    // look for containers in range of the source in its memory
    const containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
      filter: s => s.structureType === STRUCTURE_CONTAINER
    });

    // TODO: let miners build their own container

    // if no container is found check for the contruction site of a container
    if (containers.length === 0) {
      container = source.pos.findInRange(FIND_CONSTRUCTION_SITES, 1, {
        filter: s => s.structureType === STRUCTURE_CONTAINER
      })[0];

      // if there are containers just pick the first one
    } else if (containers.length) {
      container = containers[0];
    }
  }

  // with a container to stand on and a source to mine from defined
  if (container && source) {
    // harvest the source if standing on the container
    if (creep.pos.isEqualTo(container.pos)) {
      creep.harvest(source);

      // else move toward the container
    } else {
      creep.moveTo(container);
    }
  }
}
