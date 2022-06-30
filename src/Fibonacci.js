function fibonacci(n) {
    var array = [];
    array[0] = 0;
    array[1] = 1;
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }
    return array;
}

console.log(fibonacci(5));