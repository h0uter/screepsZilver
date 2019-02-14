export default function jobMine(creep: Creep): void {
  const source: (Source | null) = Game.getObjectById(creep.memory.source);
  const container: (StructureContainer | null) = Game.getObjectById(creep.memory.container);
  // with a container to stand on and a source to mine from defined
  if (container && source) {
    
    // harvest the source if standing on the container
    if (creep.pos.isEqualTo(container.pos)) {
      creep.harvest(source);

      // else move toward the container
    } else {
      creep.moveTo(container);
    }

    // else find a container to stand on that is also in range of the source in its memory
  } else {
    if (!container && source) {
      const assignContainer = () => {
        const containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
          filter: s => s.structureType === STRUCTURE_CONTAINER
        });
  
        // TODO: let miners build their own container
        // FIXME: if no container the creep should just go harvest anyway, return a no containers option
        // if no container is found check for the contruction site of a container
        if (containers.length === 0) {
          const containerConstructionSite = source.pos.findInRange(FIND_CONSTRUCTION_SITES, 1, {
            filter: s => s.structureType === STRUCTURE_CONTAINER
          })[0];
          if (containerConstructionSite) {
            return containerConstructionSite.id
          } else {
            return null
          }
          // if there are containers just pick the first one
        } else if (containers.length) {
          lg(containers[0].id)
          return containers[0].id;
        // otherwise just go harvest the source
        } else {
          lg('No container for: ' + creep.name) 
          if(creep.harvest(source) === ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
          }
          return null
        }
      }
      creep.memory.container = assignContainer();
    } 
    if (!source) {
      const assignSource = () => {
        const sources = creep.room.find(FIND_SOURCES);

        if (_.filter(Game.creeps, c => c.memory.source === sources[0].id).length === 0) {
          return sources[0].id;
        } else if (_.filter(Game.creeps, c => c.memory.source === sources[1].id).length === 0) {
          return sources[1].id;
        } else {
          return null;
        }
      };
      creep.memory.source = assignSource();
    } 
  }
}