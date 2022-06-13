const { range, sum, reverseArray, reverseArrayInPlace } = require("../index");

describe("range with nums(from, to)", () => {
  it("range(1, 10) Should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    const result = range(1, 10);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("range(1, 5) Should return [1, 2, 3, 4, 5]", () => {
    const result = range(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("range(1, 12) Should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", () => {
    const result = range(1, 12);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
  it("range(6, 2, -2) Should return [6, 4, 2]", () => {
    const result = range(6, 2, -2);
    expect(result).toEqual([6, 4, 2]);
  });
});

describe("sum(range(1, 10))", () => {
  it("sum(range(1, 10)) Should return 55", () => {
    const result = sum(range(1, 10));
    expect(result).toEqual(55);
  });
});

describe("reverseArray(['A', 'B', 'C'])", () => {
  it("reverseArray(['A', 'B', 'C']) Should return ['C', 'B', 'A']", () => {
    const result = reverseArray(['A', 'B', 'C']);
    expect(result).toEqual(['C', 'B', 'A']);
  });
});

describe("reverseArrayInPlace(array);", () => {
  let array = [1, 2, 3, 4, 5];
  it("reverseArrayInPlace(array) Should return [5, 4, 3, 2, 1]", () => {
    const result = reverseArrayInPlace(array);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
