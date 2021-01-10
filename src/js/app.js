// TODO: write your code here

import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default function calculateState(input) {
  if (input.health > 50) {
    return 'healthy';
  } else if (input.health < 50 && input.health > 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}

export function sortState(items) {
  items.sort(function (a, b) {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    return 0;
  });
  return items;
}
