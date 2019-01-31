// example declaration file - remove these and add your own custom typings



// memory extension samples

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
type MyGlobalFunctionType = (name: string) => void;


declare namespace NodeJS {
  interface Global {
    log: any;
    lg: MyGlobalFunctionType;
  }
}

// declare const lg: MyGlobalFunctionType;
// declare function lg(name: string): MyGlobalFunctionType;
declare function lg(text: string): MyGlobalFunctionType;
