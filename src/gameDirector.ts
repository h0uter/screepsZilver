import roomDirector from "./roomDirector";

export default {
   run() : void {
    // lg("Gdirector running, huts");
     Object.keys(Game.rooms).forEach(roomName => {

       Game.rooms[roomName].monitor();

       roomDirector.run(Game.rooms[roomName]);
     });
  },

};
