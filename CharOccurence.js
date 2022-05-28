const count_occur = (str) => {
    if (str.length == 0) {
        console.log('invalid string');
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i > j) {
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > 0) { console.log(`${str[i]} occurs in ${count} times`) }
    }
}

count_occur('dudyala jayakrishna')

/* Result:
d occurs in 2 times
u occurs in 1 times
y occurs in 2 times
a occurs in 5 times
l occurs in 1 times
  occurs in 1 times
j occurs in 1 times
k occurs in 1 times
r occurs in 1 times
i occurs in 1 times
s occurs in 1 times
h occurs in 1 times
n occurs in 1 times */