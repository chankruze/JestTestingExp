/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 18:19:55 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const funResolveAfterXsecs = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "ok",
      });
    }, x * 1000);
  });
};

module.exports = Object.freeze({
  funResolveAfterXsecs,
});
