
/*
Implement a binary search function to search for a given item in a sorted array

*/
function searchArray(input, target) {
    let lowerIdx = 0;
    let upperIdx = input.length - 1;
    let midIdx = Math.floor((upperIdx - lowerIdx) / 2) + lowerIdx;
    let midIdx2 = 0;
    while (midIdx != midIdx2) {
        //console.log(lowerIdx, midIdx, upperIdx);
        if (input[midIdx] == target) {
            return midIdx;
        }
        if (input[midIdx] > target) {
            upperIdx = midIdx;
        } else {
            lowerIdx = midIdx;
        }
        midIdx2 = midIdx;
        midIdx = Math.floor((upperIdx - lowerIdx) / 2) + lowerIdx;
    }
    return -1;
}


const array = [1, 2, 3, 4, 5, 11, 12, 13, 14, 20];

console.log(searchArray(array, 11));
console.log(searchArray(array, 6));
console.log(searchArray(array, 1));
