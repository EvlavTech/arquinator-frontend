/*eslint-disable */

function partition(array, n) {
  return array.length ? [array.splice(0, n)].concat(partition(array, n)) : [];
}

export { partition };
