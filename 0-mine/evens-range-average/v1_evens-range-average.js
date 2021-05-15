import {
  add,
  filter,
  length,
  map,
  range,
  sum,
  compose,
} from 'ramda';

/**
 * Checks whether the integer `x` is an even number.
 *
 * @param {number}
 * @return {boolean}
 */
const isEven = x => x % 2 === 0;

/**
 * Squares the given number `x`.
 *
 * @param {number}
 * @return {number}
 */
const square = x => x ** 2;

/**
 * Produce the average of `xs`.
 *
 * @param {Array<number>} xs
 * @return {number}
 */
const average = xs => sum(xs) / length(xs);

/**
 * Produces a list of integers from 0 up to `to`, exclusive.
 *
 * @example
 *
 *      from0(2);
 *      // → [1]
 *
 *      from0(5);
 *      // → [1, 2, 3, 4]
 *
 * @function
 * @curried
 * @param {number} to
 * @return {Array<number>}
 */
const from0 = range(0);

/**
 * Produces the average of the squared sum of even numbers from 1 to `to`.
 *
 * We ‘add 1’ because if the user passes 42, we need to make it 43 since
 * Ramda's `range()` function does not include the end side of the range.
 *
 * @param {number} to
 * @return {number}
 */
const evensRangeAvg = compose(
  average,
  map(square),
  filter(isEven),
  from0,
  add(1),
);

export { evensRangeAvg };
