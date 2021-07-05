"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.clone = function () {
        var obj = Object.assign({}, this);
        obj.setReceiver = this.setReceiver;
        obj.setSender = this.setSender;
        obj.send = this.send;
        return obj;
    };
    Mail.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    Mail.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    Mail.prototype.send = function () {
        console.log(this.sender + " \u53D1\u9001\u90AE\u4EF6\u7ED9 " + this.receiver);
    };
    return Mail;
}());
exports.Mail = Mail;
