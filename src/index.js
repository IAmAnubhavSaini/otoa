"use strict";
/**
 *
 * @param {Record<string, unknown>} obj the object
 * @param {string} keyPrefix the prefix used for picking matching keys; empty for all keys
 * @returns {Array} The array of the object values that startsWith the keyPrefix key
 */
function objectToArray(obj, keyPrefix = "") {
    return Object.keys(obj)
        .filter((key) => key.startsWith(keyPrefix))
        .sort()
        .map((key) => obj[key]);
}
function objectToKeyValueArray(obj, keyPrefix = "") {
    return Object.keys(obj)
        .filter((key) => key.startsWith(keyPrefix))
        .sort()
        .map((key) => [key, obj[key]]);
}
export { objectToArray, objectToKeyValueArray };
