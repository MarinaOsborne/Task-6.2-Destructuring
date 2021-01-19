
// console.log('worked');
export default function removeArray(character) {
  const { special } = character;
  const result = [];
  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}
