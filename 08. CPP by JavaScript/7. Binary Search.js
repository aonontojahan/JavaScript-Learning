
// Learning Binary Search in JavaScript

let numbers = [2, 3, 5, 9, 10, 12, 20, 23, 28, 40, 50, 61];

function binarySearch(key) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (numbers[mid] === key) {
            return mid;
        }
        else if (numbers[mid] > key) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;
}

let isFound = binarySearch(23);

console.log(`Found at index ${isFound}`);
