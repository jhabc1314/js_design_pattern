"use strict";
exports.__esModule = true;
var Prototype_1 = require("./Prototype");
var Mailer = new Prototype_1.Mail();
for (var i = 0; i < 5; i++) {
    var one = Mailer.clone();
    one.setReceiver('A' + i);
    one.setSender('B' + i);
    one.send();
}
