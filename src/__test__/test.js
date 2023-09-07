const { checkArguments } = require('../checkArguments');
const { Character } = require('../Character');
const { Bowerman } = require('../Bowerman');
const { Swordsman } = require('../Swordsman');
const { Magician } = require('../Magician');
const { Daemon } = require('../Daemon');
const { Undead } = require('../Undead');
const { Zombie } = require('../Zombie');

const object = {
  name: 'Vadim',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test.each([
  [new Character('Vadim', 'Daemon'), 'Character'],
  [new Bowerman('Vadim', 'Daemon'), 'Bowerman'],
  [new Swordsman('Vadim', 'Daemon'), 'Swordsman'],
  [new Magician('Vadim', 'Daemon'), 'Magician'],
  [new Daemon('Vadim', 'Daemon'), 'Daemon'],
  [new Undead('Vadim', 'Daemon'), 'Undead'],
  [new Zombie('Vadim', 'Daemon'), 'Zombie'],
])('test class %s', (person, expected) => {
  object.className = expected;
  expect({
    name: person.name,
    type: person.type,
    health: person.health,
    level: person.level,
    attack: person.attack,
    defence: person.defence,
    className: person.constructor.name,
  }).toEqual(object);
});

test.each([
  ['Vadim', 'Swordsman', undefined],
  [(10).toString(), 'Magician', undefined],
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