
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){
    return [];
  }
  let sorted = [];
  for (let i = 0; i < matrix.length; i++){
      sorted = sorted.concat((i % 2 === 0) ? matrix[i] : matrix[i].reverse());
  }
  return sorted;
}
