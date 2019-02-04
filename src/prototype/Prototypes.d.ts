interface Room {
  run() : void;
  howManyOfEach(key: string) : object;
  monitor() : void;
}

interface StructureSpawn {
  run() : void;
  buildCreep(role: string) : ScreepsReturnCode;
}

interface Creep {
  executeJobLogic(): void;
  assignJob(job: string): void;
  identifyJob() : void;
  harvestSource() : void;
  fullState() : void;
  // task: ITask | null;
}

interface RoomMemory {
  roleList:any;
  jobList: any;
  constructionSites: ConstructionSite[];

}
