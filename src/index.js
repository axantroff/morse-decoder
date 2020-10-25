const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ':  ' ',
};

function decode(expr) {
    // replace exceptions with regexp
    let tempArr = [];
    let regTen = /10/gi,
        regEleven = /11/gi,
        regSpace = /\*{10}/gi,
        regDoubleZeros = /00/g;
    for (let i = 0; i < expr.length - 1; i = i + 10)
        tempArr.push(expr.slice(i, i + 10).replace(regSpace, " ").replace(regTen, ".").replace(regEleven, "-").replace(regDoubleZeros, ""));
    let result = tempArr.map((index) => {
        return MORSE_TABLE[index];
    });
    return result.join("");
};
module.exports = {
    decode
}