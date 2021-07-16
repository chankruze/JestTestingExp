/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 18:38:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const asyncFunctions = require("../functions/asyncFunctions");

// using async/await
test("should resolve a promise after x seconds", async () => {
  const res = await asyncFunctions.funResolveAfterXsecs(1);
  expect(res).toEqual({ status: "ok" });
});

// using promises
test("should resolve a promise after x seconds", () => {
  return asyncFunctions.funResolveAfterXsecs(1).then((res) => {
    expect(res).toEqual({ status: "ok" });
  });
});

// using resolver
test("should resolve a promise after x seconds", () => {
  return expect(asyncFunctions.funResolveAfterXsecs(1)).resolves.toEqual({
    status: "ok",
  });
});
