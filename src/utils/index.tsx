/*eslint-disable */

function partition(array: any, n: any): any {
  return array.length ? [array.splice(0, n)].concat(partition(array, n)) : [];
}

export { partition };
