export function run(): void {
  // CONSOLE LOGGING
  for (const roomName in Game.rooms) {
    // ENERGY DATA
    const room = Game.rooms[roomName];
    console.log('>>Energy in room ' + roomName + ': ' + room.energyAvailable + "/" + room.energyCapacityAvailable + 
    ' = '+ room.memory.roomEnergyPercentage + '%');

    let roleListLog = '';
    const roleList = Memory.rooms[roomName].rolesInRoom;

    for (const rol in roleList) {
      roleListLog += rol + 's: ' + roleList[rol] + ' | ';
    }
    console.log('>>Pops: ' + roleListLog);

    let jobListLog = '';
    const jobList = Memory.rooms[roomName].jobsInRoom;
    _.forIn(jobList, (value, key) => {
      jobListLog += key + ': ' + value + ' | ';
    });
    console.log('>>Jobs: ' + jobListLog);
  }
  // console.log('>>CPU: ' + Game.cpu.tickLimit + '/' + Game.cpu.bucket);
}
