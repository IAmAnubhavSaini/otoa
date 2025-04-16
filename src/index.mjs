"use strict";

/**
 *
 * @param {Object} obj
 * @param {string} keyPrefix
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
