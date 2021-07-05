"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Adapter = void 0;
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.call = function (params) {
        params.forEach(function (item) { return console.log(item); });
        console.log('请求成功');
    };
    return Service;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adapter.prototype.call = function (params) {
        var p = this.translate(params);
        _super.prototype.call.call(this, p);
    };
    // 做一层兼容性转换 假设客户端过来的是正序排列数组，服务端需要倒序排列数组。
    // 通过适配器做参数兼容，而不用修改客户端和服务端的代码
    Adapter.prototype.translate = function (params) {
        return params.sort(function (a, b) {
            if (a > b) {
                return -1;
            }
            if (a < b) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
    };
    return Adapter;
}(Service));
exports.Adapter = Adapter;
