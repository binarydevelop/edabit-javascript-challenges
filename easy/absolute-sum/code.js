function getAbsSum(arr) {
  let sum = arr[0] ;
  arr.reduce((prev, curr) => {
      sum += curr;
      return sum;
  })
  return sum;
}

module.exports = getAbsSum;
