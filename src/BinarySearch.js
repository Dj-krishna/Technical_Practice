// Using Recursive Function

function recursiveFunction(x, arr, first, last) {
    const mid = Math.floor((last + first) / 2);

    if (first <= last) {
        if (arr[mid] === x) {
            return `Found the element and it's index: ${mid}.`;
        }

        if (arr[mid] > x) {
            return recursiveFunction(x, arr, first, mid - 1);
        } else {
            return recursiveFunction(x, arr, mid + 1, last);
        }
    }

    return `Not found the element.`
}

let array = [9, 3, 76, 18, 37, 563, 82, 7, 31, 8].sort((a, b) => { return a - b });
console.log(array);

let x = 82;

console.log(recursiveFunction(82, array, 0, array.length - 1));