global.lg = text => {
  console.log(text);
};

global.lgO = objectToLog => {
  console.log("logObj:::" + JSON.stringify(objectToLog));
};

global._lg = text => {
  console.log('________'+text);
}