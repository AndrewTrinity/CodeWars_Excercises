var num = 125;

alert(num.toString(2)); // "1111101"

let bin = '1110';
let dec = 0;

for (let c = 0; c < bin.length; c++) {
    if (bin[c] == 1) {
        dec += Math.pow(2, c);
    };
}

const binaryArrayToNumber = arr => {
    let dec = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            dec += Math.pow(2, i)
        }
    }
    return dec
};

0000
0001
0010
0011

