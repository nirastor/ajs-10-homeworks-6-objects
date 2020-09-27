import getAttackById from '../getAttackById';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание 'засекречено'
    },
  ],
};

test('Should sort by user-sort and then alphabetically', () => {
  const expected = [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];
  const received = getAttackById(character, 8);
  expect(received).toEqual(expected);
});

test('Should set default value for decription', () => {
  const expected = [9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно'];
  const received = getAttackById(character, 9);
  expect(received).toEqual(expected);
});
