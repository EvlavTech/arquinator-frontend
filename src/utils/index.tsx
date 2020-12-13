/*eslint-disable */

function partition(array: any[], n: number): any[][] {
  return array.length ? [array.splice(0, n)].concat(partition(array, n)) : [];
}

export { partition };
