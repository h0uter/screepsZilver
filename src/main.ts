// import 'creep-tasks';
import './utils/functions';
import './utils/global';

import gameDirector from "./gameDirector";
import './utils/functions';

import './prototype/Creep';
import './prototype/room';
import './prototype/spawn';

import { ErrorMapper } from "utils/ErrorMapper";


// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

  gameDirector.run();

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
});
