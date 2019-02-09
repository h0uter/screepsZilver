export function run(): void {
  // CONSOLE LOGGING
  for (const roomName in Game.rooms) {
    // ENERGY DATA
    const room = Game.rooms[roomName];
    console.log('>>Energy in room ' + roomName + ': ' + room.energyAvailable + "/" + room.energyCapacityAvailable);

    let roleListLog = '';
    const roleList = Memory.rooms[roomName].roleList;
    // TODO also roleListLog active jobs with #
    for (const rol in roleList) {
      roleListLog += rol + 's: ' + roleList[rol] + ' | ';
    }
    console.log('>>Pops: ' + roleListLog);

    let jobListLog = '';
    const jobList = Memory.rooms[roomName].jobList;
    _.forIn(jobList, (value, key) => {
      jobListLog += key + ': ' + value + ' | ';
    });
    console.log('>>Jobs: ' + jobListLog);
  }
  // console.log('>>CPU: ' + Game.cpu.tickLimit + '/' + Game.cpu.bucket);
}