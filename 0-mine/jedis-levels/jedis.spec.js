import { groupBySkill, groupsWithNames } from './v1_jedis';

describe('jedis.js', () => {
  describe('groupBySkill()', () => {
    it('should group jedis by skill level', () => {
      const input1 = [
        { name: 'Yoda', skill: 100 },
        { name: 'Luke', skill: 60 },
        { name: 'Ahsoka', skill: 48 },
        { name: 'Aayla', skill: 72 },
      ];

      const output1 = {
        'masters': [
          { name: 'Yoda', skill: 100 },
          { name: 'Aayla', skill: 72 },
        ],
        'padawans': [
          { name: 'Luke', skill: 60 },
          { name: 'Ahsoka', skill: 48 },
        ],
      };

      [
        [input1, output1],
      ].forEach(([input, output]) => {
        expect(groupBySkill(input)).toEqual(output);
      });
    });
  });

  describe('groupsWithNames()', () => {
    it('should return only names for each group', () => {
      const input = {
        'masters': [
          { name: 'Yoda', skill: 100 },
          { name: 'Aayla', skill: 72 },
        ],
        'padawans': [
          { name: 'Luke', skill: 60 },
          { name: 'Ahsoka', skill: 48 },
        ],
      };

      const output = {
        'masters': ['Yoda', 'Aayla'],
        'padawans': ['Luke', 'Ahsoka'],
      };

      [
        [input, output],
      ].forEach(([input, output]) => {
        expect(groupsWithNames(input)).toEqual(output);
      });
    });
  });
});
