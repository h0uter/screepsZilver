import Tasks from "creep-tasks";

export default function jobHarvest(creep: Creep): void {
    const sources = creep.room.find(FIND_SOURCES);
    // lg('before: ' + sources);
    sources.sort((a, b) => a.targetedBy.length - b.targetedBy.length);
    // lg('after: ' + sources);
    creep.task = Tasks.harvest(sources[0]);
}
