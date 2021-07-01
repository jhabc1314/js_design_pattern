"use strict";
exports.__esModule = true;
exports.BuilderY = exports.BuilderX = void 0;
var House = /** @class */ (function () {
    function House() {
        this.parts = [];
    }
    House.prototype.show = function () {
        this.parts.forEach(function (part) {
            console.log(part);
        });
    };
    return House;
}());
// 可以有不同类型的建造者，比如材质不一样 X负责木屋，Y负责混泥土
var BuilderX = /** @class */ (function () {
    function BuilderX() {
        this.house = new House();
    }
    BuilderX.prototype.buildStepA = function () {
        console.log('执行建造者X的步骤A');
        this.house.parts.push('拥有A部件');
    };
    BuilderX.prototype.buildStepB = function () {
        console.log('执行建造者X的步骤B');
        this.house.parts.push('拥有B部件');
    };
    BuilderX.prototype.buildStepC = function () {
        console.log('执行建造者X的步骤C');
        this.house.parts.push('拥有C部件');
    };
    return BuilderX;
}());
exports.BuilderX = BuilderX;
var BuilderY = /** @class */ (function () {
    function BuilderY() {
        this.house = new House();
    }
    BuilderY.prototype.buildStepA = function () {
        console.log('执行建造者Y的步骤A');
        this.house.parts.push('拥有A部件');
    };
    BuilderY.prototype.buildStepB = function () {
        console.log('执行建造者Y的步骤B');
        this.house.parts.push('拥有B部件');
    };
    BuilderY.prototype.buildStepC = function () {
        console.log('执行建造者Y的步骤C');
        this.house.parts.push('拥有C部件');
    };
    return BuilderY;
}());
exports.BuilderY = BuilderY;
