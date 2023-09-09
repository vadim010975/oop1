const { checkArguments } = require('./checkArguments');

class Character {
  constructor(name, type) {
    if (checkArguments(name, type)) {
      this.name = name;
      this.type = type;
    }
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}

module.exports = { Character };
