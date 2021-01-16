import {
  Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../app';

test('проверка длины имени <3', () => {
  expect(() => {
    new Character('хз', 'Swordsman', 10, 40);
  }).toThrow();
});

test('проверка длины имени >10', () => {
  expect(() => {
    new Character('хзuhhgfhfhfjjjsd', 'Swordsman', 10, 40);
  }).toThrow();
});

test('проверка string', () => {
  expect(() => {
    new Character(7, 'Swordsman', 10, 40);
  }).toThrow();
});

test('проверка Bowman', () => {
  expect(() => {
    new Bowman('Петя', 'Вася', 10, 40);
  }).toThrow();
});

test('проверка Swordsman', () => {
  expect(() => {
    new Swordsman('Петя', 'Вася', 10, 40);
  }).toThrow();
});

test('проверка Magician', () => {
  expect(() => {
    new Magician('Петя', 'Вася', 10, 40);
  }).toThrow();
});

test('проверка Undead', () => {
  expect(() => {
    new Undead('Петя', 'Вася', 10, 40);
  }).toThrow();
});

test('проверка Zombie', () => {
  expect(() => {
    new Zombie('Петя', 'Вася', 10, 40);
  }).toThrow();
});

test('проверка Daemon', () => {
  expect(() => {
    new Daemon('Петя', 'Вася', 10, 40);
  }).toThrow();
});

test('проверка Daemon', () => {
  const received = new Daemon('Петя', 'Daemon', 30, 20);
  expect(received.attack).toEqual(10);
});

test('проверка Zombie', () => {
  const received = new Zombie('Петя', 'Zombie', 30, 20);
  expect(received.attack).toEqual(40);
});

test('проверка Undead', () => {
  const received = new Undead('Петя', 'Undead', 30, 20);
  expect(received.attack).toEqual(25);
});

test('проверка Zombie', () => {
  const received = new Zombie('Петя', 'Zombie', 30, 20);
  expect(received.attack).toEqual(40);
});

test('проверка Magician', () => {
  const received = new Magician('Петя', 'Magician', 10, 20);
  expect(received.attack).toEqual(10);
});

test('проверка Swordsman', () => {
  const received = new Swordsman('Петя', 'Swordsman', 30, 20);
  expect(received.attack).toEqual(40);
});

test('проверка Bowman', () => {
  const received = new Bowman('Петя', 'Bowman', 30, 20);
  expect(received.attack).toEqual(25);
});
