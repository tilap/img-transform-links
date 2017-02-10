'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (str, separator) {
  if (str.indexOf(separator) > -1) {
    var _ret = function () {
      var res = {};
      str.split(separator).forEach(function (val) {
        var t = val.split('=');
        res[t[0]] = t[1] || undefined;
      });
      return {
        v: res
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return str;
};