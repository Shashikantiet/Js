const initialArray = [5, 3, 67, 23, 109, 3, 5];

const findSecondLargestValue = (arr) => {
    findlargestValue = Math.max(...arr);
    index = arr.indexOf(findlargestValue);
    arr.splice(index, 1);
    findSecLargestVal = Math.max(...arr);
    return findSecLargestVal
}

console.log("Second Largest Value in array is -", findSecondLargestValue(initialArray))