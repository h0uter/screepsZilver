interface StructureSpawn {
  run() : void;
  buildCreep(role: string): ScreepsReturnCode;
  bodyConstructor(WCM?: number[], scaling?: number[]): BodyPartConstant[];
}

interface StructureTower {
  defend() : void;
}