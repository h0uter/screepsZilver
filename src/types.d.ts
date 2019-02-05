// example declaration file - remove these and add your own custom typings

// memory extension samples

// contains al information for director to perform

interface Roles {
  [key:string]: any;
}

interface Memory {
  uuid: number;
  log: any;
}

interface KeyNumberObject {
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

