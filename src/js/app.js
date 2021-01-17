
// console.log('worked');

export default function removeArray({ special = [] }) {
  for (let i = 0; i < special.length; i += 1) {
    if (special[i].description === undefined) {
      special[i].description = 'Описание недоступно';
    }
  }
  return special;
}
