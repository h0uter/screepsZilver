interface Room {
  howManyOfEach(key: string) : object;
  updateRoomModel() : void;
  getRCL() : number;
}

interface RoomMemory {
  rolesInRoom:any;
  jobsInRoom: any;
  constructionSites: ConstructionSite[];
  droppedEnergy: string | null;
  RCL: number;
  roomEnergyPercentage: number;
}
