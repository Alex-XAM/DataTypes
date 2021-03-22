'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const el of arr) {
    const type = typeof el;
    types[type] === undefined ? types[type] = 1 : types[type] = ++types[type];
  }
  return types;
};

module.exports = { countTypesInArray };
