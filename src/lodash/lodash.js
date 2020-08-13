"use strict";
exports.__esModule = true;
exports.chunk = function (arr, size) {
    if (size === void 0) { size = 1; }
    if (size < 1) {
        return [];
    }
    var resultArray = [];
    for (var i = 0; i < arr.length; i += size) {
        resultArray.push(arr.slice(i, i + size));
    }
    return resultArray;
};
exports.compact = function (arr) {
    return arr.filter(function (value) { return !!value != false; });
};
