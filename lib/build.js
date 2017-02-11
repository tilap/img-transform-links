'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (args) {
  var generator = new _Generator2.default();
  args.forEach(function (arg) {
    return generator.add.apply(generator, _toConsumableArray(arg));
  });
  return generator.toString();
};

var _Generator = require('./Generator');

var _Generator2 = _interopRequireDefault(_Generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }