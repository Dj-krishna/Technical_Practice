

let words = ['bag', 'gab', 'foo', 'abg', 'oof', 'bum', 'cat', 'dog', 'design',
    'tac', 'god', 'act', 'cars', 'repaid', 'dues', 'nose', 'signed', 'scar',
    'lane', 'paired', 'arcs', 'grab', 'used', 'ones', 'brag', 'sued', 'lean'];

let anagrams = {};

let collectedAnagrams = [];

const collectAnagrams = (words) => {

    for (let word of words) {
        let letters = word.split('').sort().join('').toLowerCase();
        anagrams[letters] = anagrams[letters] || [];
        // console.log(anagrams[letters]);
        anagrams[letters].push(word);
    }

    for (let key in anagrams) {
        collectedAnagrams.push(anagrams[key]);
    }

    return collectedAnagrams;
}

collectAnagrams(words);

console.log(collectedAnagrams);