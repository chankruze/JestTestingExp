/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 16:23:55 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const countVowels = (str) => {
  // data
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const strArr = str.split("");
  // loop
  strArr.forEach((char) => {
    count += vowels.includes(char) ? 1 : 0;
  });
  return count;
};

const countTotalChars = (str) => {
  return str !== null && str !== undefined ? str.length : str;
};

module.exports = Object.freeze({
  countVowels,
  countTotalChars,
});
