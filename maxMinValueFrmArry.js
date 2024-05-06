const arrayOfNumber = [3, 6, 2, 76, 10, 367, 23]
const maxFunction = (arr) => {
    return arr.reduce(function (pre, cur) {
        return pre > cur ? pre : cur
    })
}

const minFunction = (arr) => {
    return arr.reduce(function (pre, cur) {
        return pre < cur ? pre : cur
    })
}

console.log("Max Value of array is -",  maxFunction(arrayOfNumber)); // Max Value
console.log("Min Value of array is -", minFunction(arrayOfNumber)); // min value