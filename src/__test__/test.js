const { Character } = require('../Character');
const { Bowerman } = require('../Bowerman');
const { Swordsman } = require('../Swordsman');
const { Magician } = require('../Magician');
const { Daemon } = require('../Daemon');
const { Undead } = require('../Undead');
const { Zombie } = require('../Zombie');

const characters = [
  {
    name: 'Vadim', type: 'Daemon', health: 100, level: 1, attack: null, defence: null,
  },
  {
    name: 'Vadim', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'Vadim', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Vadim', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  },
  {
    name: 'Vadim', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  },
  {
    name: 'Vadim', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'Vadim', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  },
];

test.each([
  [new Character('Vadim', 'Daemon'), characters[0]],
  [new Bowerman('Vadim'), characters[1]],
  [new Swordsman('Vadim'), characters[2]],
  [new Magician('Vadim'), characters[3]],
  [new Daemon('Vadim'), characters[4]],
  [new Undead('Vadim'), characters[5]],
  [new Zombie('Vadim'), characters[6]],
])('test class %s', (person, expected) => {
  expect({
    name: person.name,
    type: person.type,
    health: person.health,
    level: person.level,
    attack: person.attack,
    defence: person.defence,
  }).toEqual(expected);
});

test.each([
  ['V', 'Magician', new Error('Имя должно содержать от 2 до 10 символов')],
  ['Vadim_Skupov', 'Magician', new Error('Имя должно содержать от 2 до 10 символов')],
  ['Vadim', 'God', new Error('Неизвестное существо')],
])('test class Character with with %s name and %s type', (name, type, expected) => {
  function creatObjectWithBadArguments() {
    const character = new Character(name, type);
    character.heaith = 10000;
  }
  expect(creatObjectWithBadArguments).toThrow(expected);
});
