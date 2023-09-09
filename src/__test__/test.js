const { checkArguments } = require('../checkArguments');
const { Character } = require('../Character');
const { Bowerman } = require('../Bowerman');
const { Swordsman } = require('../Swordsman');
const { Magician } = require('../Magician');
const { Daemon } = require('../Daemon');
const { Undead } = require('../Undead');
const { Zombie } = require('../Zombie');

test.each([
  ['Vadim', 'Swordsman', true],
  [(10).toString(), 'Magician', true],
])('test function checkArguments with %s name and %s type', (name, type, expected) => {
  const result = checkArguments(name, type);
  expect(result).toBe(expected);
});

test.each([
  [8, 'Magician', new Error('Переданы некорректные значения!')],
  ['V', 'Magician', new Error('Переданы некорректные значения!')],
  ['Vadim_Skupov', 'Magician', new Error('Переданы некорректные значения!')],
  ['Vadim', 'God', new Error('Переданы некорректные значения!')],
])('test function checkArguments with %s name and %s type', (name, type, expected) => {
  function checkBadArguments() {
    checkArguments(name, type);
  }
  expect(checkBadArguments).toThrow(expected);
});

const characters = [
  {
    name: 'Vadim', type: 'Daemon', health: 100, level: 1, attack: undefined, defence: undefined,
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

test('test class Character with bad argumrnts', () => {
  function creatObjectWithBadArguments() {
    const characterGod = new Character('Vadim', 'God');
    characterGod.heaith = 10000;
  }
  expect(creatObjectWithBadArguments).toThrow(new Error('Переданы некорректные значения!'));
});
