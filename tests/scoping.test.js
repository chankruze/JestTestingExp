/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 20:22:24 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));
test("", () => console.log("1 - test"));
describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("Scoped - beforeAll"));
  afterAll(() => console.log("Scoped - afterAll"));
  beforeEach(() => console.log("Scoped - beforeEach"));
  afterEach(() => console.log("Scoped - afterEach"));
  test("", () => console.log("Scoped - test"));
});
