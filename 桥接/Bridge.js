"use strict";
exports.__esModule = true;
exports.ImplementB = exports.ImplementA = exports.ActionB = exports.ActionA = void 0;
var ImplementA = /** @class */ (function () {
    function ImplementA() {
    }
    ImplementA.prototype.opreate1 = function () {
        console.log("I am ImplementA's opreate1");
    };
    ImplementA.prototype.opreate2 = function () {
        console.log("I am ImplementA's opreate2");
    };
    return ImplementA;
}());
exports.ImplementA = ImplementA;
var ImplementB = /** @class */ (function () {
    function ImplementB() {
    }
    ImplementB.prototype.opreate1 = function () {
        console.log("I am ImplementB's opreate1");
    };
    ImplementB.prototype.opreate2 = function () {
        console.log("I am ImplementB's opreate2");
    };
    return ImplementB;
}());
exports.ImplementB = ImplementB;
var ActionA = /** @class */ (function () {
    function ActionA(implement) {
        this.implement = implement;
    }
    ActionA.prototype.action1 = function () {
        this.implement.opreate1();
    };
    ActionA.prototype.action2 = function () {
        this.implement.opreate2();
    };
    return ActionA;
}());
exports.ActionA = ActionA;
var ActionB = /** @class */ (function () {
    function ActionB(implement) {
        this.implement = implement;
    }
    ActionB.prototype.action1 = function () {
        this.implement.opreate1();
    };
    ActionB.prototype.action2 = function () {
        this.implement.opreate2();
    };
    return ActionB;
}());
exports.ActionB = ActionB;
