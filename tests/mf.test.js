/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 20:27:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const mf = require("../functions/mf");

const mockCallback = jest.fn((x) => x + 42);
mf.forEachItem([0, 1], mockCallback);

test("should test mocking functions", () => {
  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});
