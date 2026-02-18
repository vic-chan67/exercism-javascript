// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let num = 0;
  stack.forEach((c) => {if (c === card) num += 1});
  return num;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let count = 0;
  // 🚨 Use a `for...of` loop
  for (const num of stack) {
    if (type === true && num % 2 === 0) count++;
    if (type === false && num % 2 !== 0) count++;
  }
  return count;
}
