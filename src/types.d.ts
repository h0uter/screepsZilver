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

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}

interface Room {
  run() : void;
  howManyOfEach() : object;
}

interface StructureSpawn {
  run() : void;
  buildCreep(role: string) : ScreepsReturnCode;
}

//declare function lg(text: any) : void;

declare var lg: (text: string) => void; // or whatever
