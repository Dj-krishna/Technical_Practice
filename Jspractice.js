let counter = 0
function outer(a) {

    return function (b) {
        return function (c) {
            let sum = a + b + c;
            console.log(sum);
        }
    }

}
outer(1)(2)(10)
