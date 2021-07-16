/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 16:23:49 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const misc = require("../functions/misc");

test("should count vowels in a string", () => {
  expect(misc.countVowels("aeiou")).toBe(5);
  expect(misc.countVowels("chandan kumar mandal")).toBe(6);
  expect(misc.countVowels("mayank jha")).toBe(3);
  expect(misc.countVowels("eeshani")).toBe(4);
});

test("should count characters in a string", () => {
  expect(misc.countTotalChars("aeiou")).toBe(5);
  expect(misc.countTotalChars("chandan kumar mandal")).toBe(20);
  expect(misc.countTotalChars("mayank jha")).toBe(10);
  expect(misc.countTotalChars("")).toBe(0);
  expect(misc.countTotalChars(null)).toBeNull();
  expect(misc.countTotalChars(null)).not.toBeUndefined();
  expect(misc.countTotalChars(undefined)).not.toBeNull();
  expect(misc.countTotalChars(undefined)).toBeUndefined();
});

const myBeverage = {
  delicious: true,
  sour: false,
};

describe("my beverage", () => {
  it("is delicious", () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  it("is not sour", () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
