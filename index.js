const concatStrings = (a, b) => a + b;

const isString = (value) => typeof value === 'string';

const identifySign = (num) => {
    if (num < 0) {
        return 'Отрицательное число';
    } else if (num > 0) {
        return 'Положительное число';
    } else {
        return 'Ноль';
    }
};

const reverseWords = (text) => text.split(' ').reverse().join(' ');

const wordsCount = (text) => {
    if (!text.trim()) return 0;
    return text.split(/\s+/).length;
};

export { concatStrings, isString, identifySign, reverseWords, wordsCount };
