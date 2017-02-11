'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (paramValue, separator) {
  if (paramValue && paramValue.constructor === Object) {
    var _ret = function () {
      var tmp = [];
      Object.keys(paramValue).forEach(function (k) {
        var val = paramValue[k] === undefined ? '' : paramValue[k];
        tmp.push(k + '=' + val);
      });
      return {
        v: tmp.join(separator)
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return paramValue === undefined ? '' : paramValue;
};