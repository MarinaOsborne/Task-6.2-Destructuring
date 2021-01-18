
// console.log('worked');
const character = {};
export default function removeArray() {
  for (let i = 0; i < character.special.length; i += 1) {
    if (character.special[i].description === undefined) {
      character.special[i].description = 'Описание недоступно';
    }
  }
  return character.special;
}
