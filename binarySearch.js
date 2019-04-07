
/*
Implement a binary search function to search for a given item in a sorted array

*/
function searchArrayOld(input, target) {
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


function searchArray(input, target) {
    let start = 0;
    let end = input.length - 1;
    let ans = 0;
    while (start <= end) {
        ans = Math.floor((start + end) / 2);
        if (input[ans] == target) {
            return ans;
        }
        if (input[ans] > target) {
            end = ans-1;
        } else {
            start = ans+1;
        }
    }
    return -1;
}

const array = [1, 2, 3, 4, 5, 11, 12, 13, 14, 20];

console.log(searchArray(array, 11));
console.log(searchArray(array, 6));
console.log(searchArray(array, 1));
