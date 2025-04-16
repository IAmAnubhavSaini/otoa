import { objectToArray, objectToKeyValueArray } from "./index.js";

describe("objectToArray", () => {
    it("works for a i-n object", () => {
        var obj: Record<string, number> = { "i-0": 0, "i-1": 1 };
        var actual = objectToArray(obj, "i-");
        expect(typeof actual === typeof []).toBeTrue();
        expect(Array.isArray(actual)).toBeTrue();
        expect(actual[0] === obj["i-" + 0] && actual[0] === 0).toBeTrue();
        expect(actual[1] === obj["i-" + 1] && actual[1] === 1).toBeTrue();
        expect(actual[2] === obj["i-" + 2] && actual[2] === undefined).toBeTrue();
    });

    it("works for any object", () => {
        const obj = { name: "otoa", description: "object to array" };
        const actual = objectToArray(obj);
        const expected = ["otoa", "object to array"].sort();
        expect(actual).toEqual(expected);
    });

    it("works with only given key prefix", () => {
        const obj = { name: "otoa", description: "object to array" };
        const actual = objectToArray(obj, "na");
        const expected = ["otoa"].sort();
        expect(actual).toEqual(expected);
    });
});

describe("objectToKeyValueArray", () => {
    it("works for a i-n object", () => {
        var obj = { "i-0": 0, "i-1": 1 };
        var actual = objectToKeyValueArray(obj, "i-");
        expect(actual).toEqual([
            ["i-0", 0],
            ["i-1", 1],
        ]);
    });

    it("works for any object", () => {
        const obj = { name: "otoa", description: "object to array" };
        const actual = objectToKeyValueArray(obj);
        const expected = [
            ["description", "object to array"],
            ["name", "otoa"],
        ];
        expect(actual).toEqual(expected);
    });

    it("works with only given key prefix", () => {
        const obj = { name: "otoa", description: "object to array" };
        const actual = objectToKeyValueArray(obj, "na");
        const expected = [["name", "otoa"]];
        expect(actual).toEqual(expected);
    });
});
