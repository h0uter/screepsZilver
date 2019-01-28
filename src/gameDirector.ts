// import './prototype/room';

export default {
   run() : void {
    console.log("director running");

     Object.keys(Game.rooms).forEach(roomName => {
       Game.rooms[roomName].run();
     });
  },

};
