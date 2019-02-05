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
interface CreepMemory {
  [key:string]: any;
  home: string;
  role: string;
  // room: string;
  // working: boolean;
  full: boolean;
  job?: string;
}

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
