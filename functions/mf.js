/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Jul 16 2021 20:26:35 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

const forEachItem = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};

module.exports = Object.freeze({
  forEachItem,
});
