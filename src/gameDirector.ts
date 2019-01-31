// import './prototype/room';
import './utils/functions';

export default {
   run() : void {
    lg("director running");

     Object.keys(Game.rooms).forEach(roomName => {
       Game.rooms[roomName].run();
     });
  },

};
