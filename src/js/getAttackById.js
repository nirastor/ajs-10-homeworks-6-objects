export default function getAttackById(character, id) {
  const attack = character.special.find((item) => item.id === id);
  return [attack.id, attack.name, attack.icon, attack.description || 'Описание недоступно'];
}
