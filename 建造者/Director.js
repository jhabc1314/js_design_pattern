"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DirectorB = exports.DirectorA = void 0;
var DirectorBase = /** @class */ (function () {
    function DirectorBase(b) {
        this.builder = b;
    }
    return DirectorBase;
}());
var DirectorA = /** @class */ (function (_super) {
    __extends(DirectorA, _super);
    function DirectorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectorA.prototype.build = function () {
        this.builder.buildStepB();
        this.builder.buildStepC();
    };
    return DirectorA;
}(DirectorBase));
exports.DirectorA = DirectorA;
var DirectorB = /** @class */ (function (_super) {
    __extends(DirectorB, _super);
    function DirectorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectorB.prototype.build = function () {
        this.builder.buildStepA();
        this.builder.buildStepC();
    };
    return DirectorB;
}(DirectorBase));
exports.DirectorB = DirectorB;
