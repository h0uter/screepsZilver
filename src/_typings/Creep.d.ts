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
