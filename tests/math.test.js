/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 16:09:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const math = require("../functions/math");

test("should add 2 numbers", () => {
  expect(math.add(1, 2)).toBe(3);
});

test("should subtract 2 numbers", () => {
  expect(math.sub(1, 2)).toBe(-1);
});

test("should multiply 2 numbers", () => {
  expect(math.mult(1, 2)).toBe(2);
});

test("should divide 2 numbers", () => {
  expect(math.div(1, 2)).toBe(0.5);
});

test("should calculate modulus of 2 numbers", () => {
  expect(math.mod(1, 2)).toBe(1);
});

test("should check a is greater then b", () => {
  expect(math.gt(1, 2)).toBe(false);
  expect(math.gt(2, 2)).toBe(false);
});

test("should check a is greater then equal to b", () => {
  expect(math.ge(1, 2)).toBe(false);
  expect(math.ge(2, 2)).toBe(true);
});

test("should check a is less then b", () => {
  expect(math.lt(1, 2)).toBe(true);
  expect(math.lt(2, 2)).toBe(false);
});

test("should check a is greater then b", () => {
  expect(math.lt(1, 2)).toBe(true);
  expect(math.le(1, 2)).toBe(true);
});

test("should generate a number between a given min & max (excluded)", () => {
  let num = math.randInRange(10, 100, false);
  let currMax = num;
  let currMin = num;
  let count = 0;

  while (currMax !== 100 && count < 100) {
    num = math.randInRange(10, 100);
    if (currMax <= num) {
      currMax = num;
    }
    if (currMin >= num) {
      currMin = num;
    }
    expect(currMin).toBeGreaterThanOrEqual(10);
    expect(currMax).toBeLessThan(100);
    expect(num).toBeGreaterThanOrEqual(10);
    expect(num).toBeLessThan(100);
    count++;
  }
});

test("should generate a number between a given min & max (included)", () => {
  let num = math.randInRange(10, 100, true);
  let currMax = num;
  let currMin = num;
  let count = 0;

  while (currMax !== 100 && count < 100) {
    num = math.randInRange(10, 100);
    if (currMax <= num) {
      currMax = num;
    }
    if (currMin >= num) {
      currMin = num;
    }
    expect(currMin).toBeGreaterThanOrEqual(10);
    expect(currMax).toBeLessThanOrEqual(100);
    expect(num).toBeGreaterThanOrEqual(10);
    expect(num).toBeLessThanOrEqual(100);
    count++;
  }
});
