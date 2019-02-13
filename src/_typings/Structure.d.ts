interface StructureSpawn {
  run() : void;
  buildCreep(role: string) : ScreepsReturnCode;
}

interface StructureTower {
  defend() : void;
}