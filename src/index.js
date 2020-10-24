module.exports = function toReadable (number) {
    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }

    let hun, ten, ost;

    if(number < 20) {
        return numbers[number];
    } else if (number.toString().length == 2) {
        ost = number % 10;
        ten = number - ost;
        return ost == 0 ? numbers[ten] : `${numbers[ten]} ${numbers[ost]}`
    } else if (number.toString().length == 3) {
        ten = number % 100;
        ost = ten % 10;
        hun = parseInt(number.toString()[0]);
        let res = numbers[hun].concat(' hundred');
        return res += ten == 0 ? '' : (ten - ost) < 20 ? ' ' + numbers[ten] : ' ' + (ost == 0 ? numbers[ten] : numbers[ten - ost] + ' ' + numbers[ost]);
    }
}
