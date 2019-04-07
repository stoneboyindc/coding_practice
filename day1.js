/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const array = [10, 15, 3, 7];

function findTwo(list, k) {
    let len = list.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i == j) {
                continue;
            }
            if (list[i] + list[j] == k) {
                return true;
            }
        }
    }
    return false;
}

console.log(findTwo(array, 9));
console.log(findTwo(array, 10));
console.log(findTwo(array, 17));
console.log(findTwo(array, 18));
console.log(findTwo(array, 19));

function findTwoPlus(list, k) {
    let len = list.length;
    let map = {};
    for (let i = 0; i < len; i++) {
        if (map[list[i]] == null) {
            map[list[i]] = true;
        }
        let target = k - list[i];
        if (map[target]) {
            return true;
        }
    }
    return false;
}

console.log(findTwoPlus(array, 9));
console.log(findTwoPlus(array, 10));
console.log(findTwoPlus(array, 17));
console.log(findTwoPlus(array, 18));
console.log(findTwoPlus(array, 19));