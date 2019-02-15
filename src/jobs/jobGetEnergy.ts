import Tasks from "creep-tasks";

// 1 check for dropped energy (room list[targetted<2])
// 2 check for storage
// 3 check for container
// 4 check for source

// sort sources by how many other creeps have targetted that source, then harvest the least targetted one
export default function jobGetEnergy(creep: Creep): void {
    // TODO: make room.memory.droppedEnergy an array of dropped energy deposits sorted by least targeted and max targeted by 2 creeps
    if (creep.room.memory.droppedEnergy) {
        const droppedEnergy: (Resource | null) = Game.getObjectById(creep.room.memory.droppedEnergy)
        // if (droppedEnergy && droppedEnergy.targetedBy.length < 3) {
        if (droppedEnergy) {
            creep.task = Tasks.pickup(droppedEnergy)
            return
        }
        
        // if(creep.pickup(source) === ERR_NOT_IN_RANGE) {
        //     creep.moveTo(source);
        //   }
    }

    const sources = creep.room.find(FIND_SOURCES);

    sources.sort((a, b) => a.targetedBy.length - b.targetedBy.length);
    
    creep.task = Tasks.harvest(sources[0]);
}


