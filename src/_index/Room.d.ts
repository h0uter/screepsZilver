interface Room {
  howManyOfEach(key: string) : object;
  monitor() : void;
  getRCL() : number;
}

interface RoomMemory {
  roleList:any;
  jobList: any;
  constructionSites: ConstructionSite[];
  RCL: number;
  roomEnergyPercentage: number;
}
