// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let BIRDS = 0;
  for (let b = 0; b < birdsPerDay.length; b++) {
    BIRDS += birdsPerDay[b];
  }
  return BIRDS;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let BIRDS = 0;
  for (let b = (week-1)*7; b < ((week-1)*7)+7; b++) {
    BIRDS += birdsPerDay[b];
  }
  return BIRDS;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let b=0; b<birdsPerDay.length; b+=2) {
    birdsPerDay[b] = birdsPerDay[b]+1;
  }
}
