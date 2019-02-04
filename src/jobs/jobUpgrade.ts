import Tasks from "creep-tasks";

export function jobUpgrade(creep: Creep): void {
  const controller = Game.rooms[creep.memory.home].controller;
  if (controller) {
    creep.task = Tasks.upgrade(controller);
  }
}
