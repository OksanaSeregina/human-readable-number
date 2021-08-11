module.exports = function toReadable(num) {
    const FROM_ONE_TO_NINE = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const FROM_TEN_TO_NINETEEN = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const FROM_TWENTY_TO_NINETY = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundreds = Math.trunc(num / 100);
    const tenths = num - hundreds * 100;

    let result = "";

    if (num === 0) {
        result = "zero";
    }

    // Examples: 920 - hundreds is 9; 433 - hundreds is 4;
    if (hundreds >= 1) {
        result = `${FROM_ONE_TO_NINE[hundreds]} hundred`;
    }

    // Examples: 28, 30, 40 - tens are more than 20;
    if (tenths >= 20) {
        result = `${result} ${FROM_TWENTY_TO_NINETY[Math.trunc(tenths / 10)]} ${
            FROM_ONE_TO_NINE[tenths % 10]
        }`;
    } else if (tenths >= 10) {
        // Examples: 11, 12, 15 - tens are more than 10, but less than 20;
        result = `${result} ${FROM_TEN_TO_NINETEEN[tenths - 10]}`;
    } else {
        // Examples: 1, 2, 4 - no tens
        result = `${result} ${FROM_ONE_TO_NINE[tenths % 10]}`;
    }

    return result.trim();
};
