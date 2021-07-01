"use strict";
exports.__esModule = true;
var Builder_1 = require("./Builder");
var Director_1 = require("./Director");
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('请选择建造者\n 1:X, 2:Y\n', function (b) {
    var builder;
    if (b === '1') {
        builder = new Builder_1.BuilderX();
    }
    else if (b === '2') {
        builder = new Builder_1.BuilderY();
    }
    else {
        console.log('选择错误，请重新选择');
        readline.close();
        return;
    }
    readline.question('请选择蓝图\n1:蓝图A，2:蓝图B\n', function (d) {
        var director;
        if (b === '1') {
            director = new Director_1.DirectorA(builder);
        }
        else if (b === '2') {
            director = new Director_1.DirectorB(builder);
        }
        else {
            console.log('蓝图选择错误，请重新选择');
            readline.close();
            return;
        }
        // 开始构建，具体构建的内容步骤都是由指挥官指定
        director.build();
        // 打印结果
        builder.house.show();
        readline.close();
    });
});
