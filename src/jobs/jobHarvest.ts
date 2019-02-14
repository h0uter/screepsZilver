import Tasks from "creep-tasks";

// sort sources by how many other creeps have targetted that source, then harvest the least targetted one
export default function jobHarvest(creep: Creep): void {
    const sources = creep.room.find(FIND_SOURCES);

    sources.sort((a, b) => a.targetedBy.length - b.targetedBy.length);
    
    creep.task = Tasks.harvest(sources[0]);
}
