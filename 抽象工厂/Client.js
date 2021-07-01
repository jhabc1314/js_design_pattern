"use strict";
exports.__esModule = true;
// 客户端来生产椅子
var AbstractFactory_1 = require("./AbstractFactory");
var Client = /** @class */ (function () {
    function Client(factory) {
        this.factory = factory;
    }
    return Client;
}());
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('请选择要生产的椅子风格，\n1：维多利亚，2：现代\n', function (style) {
    var factory;
    if (style === '1') {
        factory = new AbstractFactory_1.VictorianProductFactory();
    }
    else if (style === '2') {
        factory = new AbstractFactory_1.ModernProductFactory();
    }
    else {
        console.log('风格选择错误，请重新选择');
        readline.close();
        return;
    }
    var client = new Client(factory);
    var chair = client.factory.createChair();
    chair.sitOn();
    chair.hasLeg();
    readline.close();
});
