import initialState from '../initState';

test('initialState', () => {
  const result = initialState();
  expect(result).toEqual({
    Bowman: {
      types: [], name: 'Федя', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    },
    Daemon: {
      types: [], name: 'Надя', type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25,
    },
    Magician: {
      types: [], name: 'Коля', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    },
    Swordsman: {
      types: [], name: 'Петя', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    },
    Undead: {
      types: [], name: 'Валя', type: 'Undead', health: 100, level: 1, attack: 40, defence: 10,
    },
    Zombie: {
      types: [], name: 'Дима', type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40,
    },
  });
});
