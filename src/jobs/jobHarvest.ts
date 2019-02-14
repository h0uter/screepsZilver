import Tasks from "creep-tasks";

// sort sources by how many other creeps have targetted that source, then harvest the least targetted one
export default function jobHarvest(creep: Creep): void {
    if (creep.room.memory.droppedEnergy) {
        const droppedEnergy: (Resource | null) = Game.getObjectById(creep.room.memory.droppedEnergy)
        if (droppedEnergy) {
            creep.task = Tasks.pickup(droppedEnergy)
        }
        // if(creep.pickup(source) === ERR_NOT_IN_RANGE) {
        //     creep.moveTo(source);
        //   }
    }

    const sources = creep.room.find(FIND_SOURCES);

    sources.sort((a, b) => a.targetedBy.length - b.targetedBy.length);
    
    creep.task = Tasks.harvest(sources[0]);
}
