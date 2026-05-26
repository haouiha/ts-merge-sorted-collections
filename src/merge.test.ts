import { describe, it, expect } from "vitest";
import { merge } from "./merge";

describe("merge", () => {
  it("should return ascending order when given three non-empty collections", () => {
    const collection1 = [9, 5, 1];
    const collection2 = [2, 4, 8];
    const collection3 = [3, 6, 7];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should return ascending order when collections contain duplicate values", () => {
    const collection1 = [5, 3, 1];
    const collection2 = [1, 3, 5];
    const collection3 = [1, 3, 5];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 1, 1, 3, 3, 3, 5, 5, 5]);
  });

  it("should return ascending order when one collection is empty", () => {
    const collection1 = [4, 2];
    const collection2 = [1, 3, 5];
    const collection3 = [1, 2, 3];

    expect(merge(collection1, [], collection2)).toEqual([1, 2, 3, 4, 5]);
    expect(merge([], collection3, [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([3, 1], [2, 4], [])).toEqual([1, 2, 3, 4]);
  });

  it("should return empty array when all collections are empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("should return ascending order when each collection has a single element", () => {
    const collection1 = [3];
    const collection2 = [1];
    const collection3 = [2];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3]);
  });

  it("should return ascending order when collections have different lengths", () => {
    const collection1 = [10, 6, 2];
    const collection2 = [1];
    const collection3 = [3, 4, 5, 7, 8, 9];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return ascending order when collections contain negative numbers", () => {
    const collection1 = [1, -1, -3];
    const collection2 = [-4, -2];
    const collection3 = [0, 2];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([-4, -3, -2, -1, 0, 1, 2]);
  });

  it("should return all identical values when all elements are the same", () => {
    const collection1 = [5, 5];
    const collection2 = [5, 5];
    const collection3 = [5];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([5, 5, 5, 5, 5]);
  });
});
