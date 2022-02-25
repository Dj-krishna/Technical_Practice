let revArray = [];

function ReverseString(str) {

    // Check input
    if (!str || str.length < 2 ||
        typeof str !== 'string') {
        return 'Not valid';
    }

    // Take empty array revArray
    const length = str.length - 1;

    // Looping from the end
    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }

    // Joining the array elements
    return revArray;
}

//ReverseString('I am Jayakrishna Dudyala');

//console.log(revArray.join(''));

ReverseStrings('I am Jayakrishna Dudyala');

function ReverseStrings(str) {
    let rev = str.split('').reverse().join('');
    console.log(rev);
}
