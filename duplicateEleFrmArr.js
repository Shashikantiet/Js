// How to find duplicate element in given array 

const arrOfNumber = [7,8,5,6,4,6,7];
const duplicateNumbers = arrOfNumber.filter((ele, index, arry) => arry.indexOf(ele) !== index);
console.log(duplicateNumbers)