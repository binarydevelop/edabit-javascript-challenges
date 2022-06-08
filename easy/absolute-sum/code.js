function getAbsSum(arr) {
  let sum = arr[0] ;
  arr.reduce((prev, curr) => {
      sum += curr;
      return sum;
  })
  return sum;
}

function getAbsSum2(arr){
  let sum = 0;
  arr.forEach((elem) => {
    sum += elem
  })
  return sum;
}

module.exports = {
  getAbsSum,
  getAbsSum2
}
