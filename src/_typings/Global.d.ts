

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
