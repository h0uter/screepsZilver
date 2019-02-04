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

interface Roles {
  [key:string]: any;
}

interface ConstructionSite {
  priority: number;
}

interface Memory {
  uuid: number;
  log: any;
}

interface Lijst {
  [key:string]: number;
}


// `global` extension samples
type MyGlobalFunctionType = (name: any) => void;


declare namespace NodeJS {
  interface Global {
    log: any;
    lg: MyGlobalFunctionType;
    lgO: MyGlobalFunctionType;
  }
}

// declare const lg: MyGlobalFunctionType;
// declare function lg(name: string): MyGlobalFunctionType;
declare function lg(text: string): MyGlobalFunctionType;
declare function lgO(o: object): MyGlobalFunctionType;

