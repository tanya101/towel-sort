module.exports = function towelSort(matrix = []) {

const result = matrix.map((arr, i) => i % 2 ? arr.slice().reverse() : arr).flat();

console.log(result);
return result;
}
