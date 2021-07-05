"use strict";
exports.__esModule = true;
exports.MysqlConnector = void 0;
var config_1 = require("./config");
var MysqlInstance = /** @class */ (function () {
    function MysqlInstance() {
    }
    MysqlInstance.prototype.connect = function (c) {
        console.log("\u606D\u559C\uFF0C" + c.host + ":" + c.port + "\u8FDE\u63A5\u6210\u529F-\u7528\u6237\u540D:" + c.username);
    };
    MysqlInstance.prototype.reconnect = function () {
        console.log('恭喜，重连成功');
    };
    MysqlInstance.prototype.ping = function () {
        return Math.random() >= 0.5;
    };
    MysqlInstance.prototype.execute = function (sql, params) {
        console.log('成功执行sql-' + sql);
    };
    return MysqlInstance;
}());
var MysqlConnector = /** @class */ (function () {
    function MysqlConnector() {
    }
    MysqlConnector.getInstance = function (dbname) {
        if (dbname === void 0) { dbname = 'default'; }
        if (this._instance instanceof MysqlInstance) {
            this._instance.ping() || this._instance.reconnect();
            return this._instance;
        }
        var dbconfig = config_1["default"][dbname];
        this._instance = new MysqlInstance();
        this._instance.connect(dbconfig);
        return this._instance;
    };
    return MysqlConnector;
}());
exports.MysqlConnector = MysqlConnector;
