"use strict";
// 抽象工厂
// 场景，生产各种风格椅子，有维多利亚风格，有现代风格等
// 生产各种风格沙发，有维多利亚和现代等
// 生成各种风格桌子，有维多利亚和现代等
exports.__esModule = true;
exports.ModernProductFactory = exports.VictorianProductFactory = void 0;
var VictorianChair = /** @class */ (function () {
    function VictorianChair() {
    }
    VictorianChair.prototype.hasLeg = function () {
        console.log("我拥有维多利亚风格的腿");
    };
    VictorianChair.prototype.sitOn = function () {
        console.log("我是维多利亚风格椅子，我可以坐");
    };
    return VictorianChair;
}());
var ModernChair = /** @class */ (function () {
    function ModernChair() {
    }
    ModernChair.prototype.hasLeg = function () {
        console.log("我拥有现代风格的腿");
    };
    ModernChair.prototype.sitOn = function () {
        console.log("我是现代风格的椅子，我也可以坐");
    };
    return ModernChair;
}());
// 定义实际产品工厂
var VictorianProductFactory = /** @class */ (function () {
    function VictorianProductFactory() {
    }
    VictorianProductFactory.prototype.createChair = function () {
        return new VictorianChair();
    };
    VictorianProductFactory.prototype.createSofa = function () {
        // 创建维多利亚风格沙发
    };
    VictorianProductFactory.prototype.createDesk = function () {
        // 创建维多利亚风格桌子
    };
    return VictorianProductFactory;
}());
exports.VictorianProductFactory = VictorianProductFactory;
var ModernProductFactory = /** @class */ (function () {
    function ModernProductFactory() {
    }
    ModernProductFactory.prototype.createChair = function () {
        return new ModernChair();
    };
    ModernProductFactory.prototype.createSofa = function () {
        // 生成现代风格沙发
    };
    ModernProductFactory.prototype.createDesk = function () {
        // 生产现代风格桌子
    };
    return ModernProductFactory;
}());
exports.ModernProductFactory = ModernProductFactory;
