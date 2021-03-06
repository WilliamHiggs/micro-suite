
const asset = require('./assets.js');

function objectEquals(x, y) {
  'use strict';

  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }

  if (x.constructor !== y.constructor) {
    return false;
  }

  if (x instanceof Function) {
    return x === y;
  }

  if (x instanceof RegExp) {
    return x === y;
  }

  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }

  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  if (x instanceof Date) {
    return false;
  }

  if (!(x instanceof Object)) {
    return false;
  }

  if (!(y instanceof Object)) {
    return false;
  }

  var p = Object.keys(x);
  return (
    Object.keys(y).every(function (i) {
      return p.indexOf(i) !== -1;
    }) &&
    p.every(function (i) {
      return objectEquals(x[i], y[i]);
    })
  );
}

function describe(description, it) {
  console.log('\n', asset.underline, description, asset.reset);
  it();
}

function it(should, expect) {
  console.log(should);
  expect();
}

function expect(actual) {
  console.time('time');
  console.log('returned: ' + actual);
  console.timeEnd('time');
  return {
    toBe: function (expected) {
      if (typeof actual === typeof expected) {
        if (objectEquals(actual, expected)) {
          console.log(asset.green, `${asset.tick} TEST PASSED.` + "\n", asset.reset);
        } else {
          console.log(
            asset.red,
            `${asset.cross} TEST FAILED. Expected ${expected} but got ${actual}` + '\n',
            asset.reset
          );
        }
      } else {
        console.log(
          asset.red,
          `${asset.cross} TEST FAILED. Wrong type. Expected ${typeof expected} but got ${typeof actual}` +
          '\n',
          asset.reset
        );
      }
    },
    notToBe: function (expected) {
      if (!objectEquals(actual, expected)) {
        console.log(asset.green, `${asset.tick} TEST PASSED.` + "\n", asset.reset);
      } else {
        console.log(
          asset.red,
          `${asset.cross} TEST FAILED. ${expected} equals ${actual}` + '\n',
          asset.reset
        );
      }
    },
    toBeMoreThan: function (expected) {
      if (typeof expected === 'number' && typeof actual === 'number') {
        if (actual > expected) {
          console.log(asset.green, `${asset.tick} TEST PASSED.` + "\n", asset.reset);
        } else if (actual === expected) {
          console.log(
            asset.red,
            `${asset.cross} TEST FAILED. ${actual} is equal to ${expected} ` + '\n',
            asset.reset
          );
        } else {
          console.log(
            asset.red,
            `${asset.cross} TEST FAILED. ${actual} is less than ${expected} ` + '\n',
            asset.reset
          );
        }
      } else {
        console.log(
          asset.red,
          `${asset.cross} TEST FAILED. Requires a number for both conditions` + '\n',
          asset.reset
        );
      }
    },
    toBeLessThan: function (expected) {
      if (typeof expected === 'number' && typeof actual === 'number') {
        if (actual < expected) {
          console.log(asset.green, `${asset.tick} TEST PASSED.` + "\n", asset.reset);
        } else if (actual === expected) {
          console.log(
            asset.red,
            `${asset.cross} TEST FAILED. ${actual} is equal to ${expected}  ` + '\n',
            asset.reset
          );
        } else {
          console.log(
            asset.red,
            `${asset.cross} TEST FAILED. ${actual} is more than ${expected}  ` + '\n',
            asset.reset
          );
        }
      } else {
        console.log(
          asset.red,
          `${asset.cross} TEST FAILED. Requires a number for both conditions` + '\n',
          asset.reset
        );
      }
    },
    toInclude: function (expected) {
      if (actual.includes(expected)) {
        console.log(asset.green, `${asset.tick} TEST PASSED.` + "\n", asset.reset);
      } else {
        console.log(
          asset.red,
          `${asset.cross} TEST FAILED. Result did not include ${expected}` + '\n',
          asset.reset
        );
      }
    },
    toNotInclude: function (expected) {
      if (!actual.includes(expected)) {
        console.log(asset.green, `${asset.tick} TEST PASSED.` + "\n", asset.reset);
      } else {
        console.log(
          asset.red,
          `${asset.cross} TEST FAILED. Result did include ${expected}` + '\n',
          asset.reset
        );
      }
    }
  };
}

module.exports = {
  describe: describe,
  it: it,
  expect: expect
};
