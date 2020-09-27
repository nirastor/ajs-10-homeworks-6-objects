import orderByProps from '../orderByProps';

test('Should sort by user-sort and then alphabetically', () => {
  const expected = [
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ];

  const received = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['level', 'defence']);

  expect(received).toEqual(expected);
});

test('Should sort alphabetically if there no user sort given', () => {
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const received = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  });

  expect(received).toEqual(expected);
});

test('Should ignore unknown properties', () => {
  const expected = [
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ];

  const received = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['unknown', 'level']);

  expect(received).toEqual(expected);
});
