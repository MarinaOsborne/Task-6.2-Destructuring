
import  calculateState, { sortState } from '../app';

test('should check state', () => {
  expect(calculateState({ name: 'Маг', health: 51 })).toBe('healthy');
  expect(calculateState({ name: 'Маг', health: 16 })).toBe('wounded');
  expect(calculateState({ name: 'Маг', health: 13 })).toBe('critical');
});

test('should check order', () => {
  expect(sortState([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ])).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
  expect(sortState([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ])).toEqual([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ]);
});
