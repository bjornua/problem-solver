/* global TARGET */

export let setInterval;
export let setTimeout;

if (TARGET === 'web') {
  /* global window */
  setInterval = window.setInterval.bind(window);
  setTimeout = window.setTimeout.bind(window);
}
