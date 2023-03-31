"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var expect_1 = require("expect");
var ExpectWrapper = /** @class */ (function () {
    function ExpectWrapper() {
    }
    /**
     * @param {*} actualValue
     * @param {*} expectedValue
     * @returns {*}
     */
    ExpectWrapper.prototype.expectEqual = function (actualValue, expectedValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](actualValue).toEqual(expectedValue)];
            });
        });
    };
    /**
     * @param {*} actualValue
     * @param {*} expectedValue
     * @returns {*}
     */
    ExpectWrapper.prototype.expectNotEqual = function (actualValue, expectedValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](actualValue).not.toEqual(expectedValue)];
            });
        });
    };
    /**
     * @param {*} actualValue
     * @param {*} expectedValue
     * @returns {*}
     */
    ExpectWrapper.prototype.expectContain = function (actualValue, expectedValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](actualValue).toContain(expectedValue)];
            });
        });
    };
    /**
     * @param {*} actualValue
     * @param {*} expectedValue
     * @returns {*}
     */
    ExpectWrapper.prototype.expectGreaterThan = function (actualValue, expectedValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](actualValue).toBeGreaterThan(expectedValue)];
            });
        });
    };
    /**
     * @param {*} a
     * @returns {*}
     */
    ExpectWrapper.prototype.expectNotEmpty = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](a).not.toEqual("")];
            });
        });
    };
    /**
     * @param {*} a
     * @returns {*}
     */
    ExpectWrapper.prototype.expectToBeTrue = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](a).toBeTruthy()];
            });
        });
    };
    /**
     * @param {*} a
     * @returns {*}
     */
    ExpectWrapper.prototype.expectToBeFalse = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](a).toBeFalsy()];
            });
        });
    };
    /**
     * @param {*} actualValue
     * @param {*} expectedValue
     * @returns {*}
     */
    ExpectWrapper.prototype.expectNotContain = function (actualValue, expectedValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](actualValue).not.toContain(expectedValue)];
            });
        });
    };
    /**
     * Expect object to have property with expected value if passed
     * @param {*} object
     * @param {*} property
     * @param {*} [value]
     * @returns {*}
     */
    ExpectWrapper.prototype.expectToHaveProperty = function (object, property, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, expect_1["default"](object).toHaveProperty(property, value)];
            });
        });
    };
    return ExpectWrapper;
}());
module.exports = ExpectWrapper;
