import {
  assoc,
  groupBy,
  keys,
  reduce,
  pluck,
} from 'ramda';

/**
 * @typedef {Object} Jedi
 * @property {string} name The jedi's name.
 * @property {number} skill The jedi's skill level.
 */

/**
 * @typedef {('masters' | 'padawans')} Group
 */

/**
 * @typedef {Object} JediGroups
 * @property {Array<Jedi>} masters
 * @property {Array<Jedi>} padawans
 */

/**
 * @typedef {Object} GroupNames
 * @property {Array<string>} masters
 * @property {Array<string>} padawans
 */

/**
 * Return the jedi skill category given their skill level.
 *
 * @param {Jedi} jedi
 * @return {Group}
 */
function getSkillLevel({ skill }) {
  return skill >= 65 ? 'masters' : 'padawans';
}

/**
 * Group jedis by skills, masters or padawans.
 *
 * @param {Array<Jedi>} jedis
 * @return {JediGroups}
 */
function groupBySkill(jedis) {
  return groupBy(getSkillLevel, jedis);
}

/**
 * Retrives the names of the given jedis.
 *
 * @param {Array<Jedi>}
 * @return {Array<string>}
 */
const pluckNames = pluck(['name']);

/**
 *
 * @param {JediGroups} groups
 * @returns {GroupNames}
 */
function groupsWithNames(groups) {
  return reduce((acc, group) => {
    return assoc(group, pluckNames(groups[group]), acc);
  }, {}, keys(groups));
}

export {
  groupBySkill,
  groupsWithNames,
};
