interface Room {
  run() : void;
}

Object.assign(Room.prototype, {
  run() {
    console.log('yeehav')
  },
});
