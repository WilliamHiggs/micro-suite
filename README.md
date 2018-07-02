# micro-suite :traffic_light:
## A lightweight unit testing suite for TDD on NodeJS

Easy to read and quick to run tests.

```javascript
describe("function to make a + b = c", () => {
  it("should make 1+2=3", () => {
    expect(add(1, 2)).toBe(3);
  });
```
Expect API:

1. toBe - Type checking and contents checking. Can check contents of two arrays.
2. notToBe - Type and contents checking and returns false for matching items.
3. toBeMoreThan - Checks two number types and returns true for more than.
4. toBeLessThan - Checks two number types and return true for less than.
