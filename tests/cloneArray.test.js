/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 15:31:25 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const cloneArray = require("../functions/cloneArray");

test("should create a new array with old array elements", () => {
  const arr = [1, 2, 3, 4];
  expect(cloneArray(arr)).toEqual(arr);
});
