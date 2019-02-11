import roomDirector from "./roomDirector";

export default {
   run() : void {
    // lg("Gdirector running, huts");
    Memory.gameModel = {}
    Memory.gameModel.numberOfRooms = Object.keys(Game.rooms).length

    Object.keys(Game.rooms).forEach(roomName => {

      roomDirector.run(Game.rooms[roomName]);
    });
  },
};
