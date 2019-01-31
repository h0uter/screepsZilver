// example declaration file - remove these and add your own custom typings

// memory extension samples

// contains al information for director to perform
interface Model {
  creeps: object;
  RCL: number;
  constructionSites: object;
  roleList: object;
  jobList: object;
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

interface Creep {
  identifyJob() : void;
  harvestSource() : void;
  fullState() : void;
  // task: ITask | null;
}

interface Memory {
  uuid: number;
  log: any;
}



interface Room {
  run() : void;
  howManyOfEach() : object;
}

interface StructureSpawn {
  run() : void;
  buildCreep(role: string) : ScreepsReturnCode;
}

// `global` extension samples
type MyGlobalFunctionType = (name: any) => void;


declare namespace NodeJS {
  interface Global {
    log: any;
    lg: MyGlobalFunctionType;
  }
}

// declare const lg: MyGlobalFunctionType;
// declare function lg(name: string): MyGlobalFunctionType;
declare function lg(text: string): MyGlobalFunctionType;
