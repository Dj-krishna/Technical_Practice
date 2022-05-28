function SumArrElements(arr) {
    let sum = arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0)

    return sum;
}

console.log(SumArrElements([1, 2, 3, 4, 1000]));