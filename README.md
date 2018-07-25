# micro-suite :traffic_light:
## A lightweight unit testing suite for TDD on NodeJS

Easy to read and quick to run tests.

```javascript
describe("function to make a + b = c", () => {
  it("should make 1+2=3", () => {
    expect(add(1, 2)).toBe(3);
  });
```
____
### Setup
At the top of your test files:
```javascript
const {describe, it, expect} = require('./micro-suite/test.js');
//and also require() the modules you are testing
```
and then just import your test files into your index.js to automatially initiate the tests.

! micro-suite will be on NPM for install soon !
____

### Expect API:

1. toBe - Type checking and contents checking. Can check contents of two arrays.
2. notToBe - Type and contents checking and returns false for matching items.
3. toBeMoreThan - Checks two number types and returns true for more than.
4. toBeLessThan - Checks two number types and return true for less than.
_____
### Mock Data
you can declare variables and run code scoped within the test to imitate data and state:
```javascript
describe("function to make a + b = c", () => {
  it("should be able to take a function as an argument", () => {

    function repeatFive(x,y) {
      var a = [];
      for(let i = 0; i<5; i++) {
        a.push(add(x, y));
      }
      return a.reduce((a,b) => a + b);
    }

    expect(add(repeatFive(1,2), 5)).toBe(20);
  });
});
```
#### returns:
```
 function to make a + b = c
should be able to take a function as an argument
returned: 20
time: 0.225ms
 ✔ TEST PASSED.
```
____
### Contributions
Contributions more than welcome!
Please raise a new issue for bugs and features or add a pull request.
