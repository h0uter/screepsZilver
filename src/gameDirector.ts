import roomDirector from "./roomDirector";

export default {
   run() : void {
    // lg("Gdirector running, huts");
    Memory.gameModel = {}
    Memory.gameModel.numberOfRooms = Object.keys(Game.rooms).length

    // TOWERS
    const towers: StructureTower[] = _.filter(Game.structures, s => s.structureType === STRUCTURE_TOWER) as StructureTower[];
    for (const tower of towers) {
      tower.defend();
    }

    Object.keys(Game.rooms).forEach(roomName => {

      roomDirector.run(Game.rooms[roomName]);
    });
  },
};
