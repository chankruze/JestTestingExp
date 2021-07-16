/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 16:08:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const mod = (a, b) => {
  return a % b;
};

const gt = (a, b) => {
  return a > b;
};

const lt = (a, b) => {
  return a < b;
};

const ge = (a, b) => {
  return a >= b;
};

const le = (a, b) => {
  return a <= b;
};

const randInRange = (min, max, inclueMax) => {
  return Math.round(Math.random() * (max - min - (inclueMax ? 0 : 1)) + min);
};

module.exports = Object.freeze({
  add,
  sub,
  mult,
  div,
  mod,
  gt,
  lt,
  ge,
  le,
  randInRange,
});
