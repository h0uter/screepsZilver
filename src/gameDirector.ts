export default {
   run() : void {
    lg("director running, huts");

     Object.keys(Game.rooms).forEach(roomName => {
       Game.rooms[roomName].run();
     });
  },

};
