// example declaration file - remove these and add your own custom typings

// memory extension samples
interface CreepMemory {
  home: string;
  role: string;
  // room: string;
  // working: boolean;
  full: boolean;
  job: string;

}

interface Creep {
  identifyJob() : void;
  harvestSource() : void;
  fullState() : void;
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
}

interface StructureSpawn {
  run() : void;
  buildCreep(role: string) : ScreepsReturnCode;
}

