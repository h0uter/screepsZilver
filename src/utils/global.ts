global.lg = text => {
  console.log(text);
};

global.lgO = objectToLog => {
  console.log("logObj:::" + JSON.stringify(objectToLog));
};

// TODO: debug parameter to turn this log on or off
global._lg = text => {
  console.log('________'+text);
}