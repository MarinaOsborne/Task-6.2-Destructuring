// TODO: write your code here

// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default function sortState(items) {
  items.sort((a, b) => {
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
