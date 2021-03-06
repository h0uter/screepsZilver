

// `global` extension samples
type MyGlobalFunctionType = (name: any) => void;


declare namespace NodeJS {
  interface Global {
    log: any;
    lg: MyGlobalFunctionType;
    lgO: MyGlobalFunctionType;
    _lg: MyGlobalFunctionType;
  }
}

// declare const lg: MyGlobalFunctionType;
// declare function lg(name: string): MyGlobalFunctionType;
declare function lg(text: string): MyGlobalFunctionType;
declare function lgO(o: object): MyGlobalFunctionType;
declare function _lg(text: string): MyGlobalFunctionType;
