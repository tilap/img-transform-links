'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var generator = new _Generator2.default();

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    return generator.add(arg);
  });
  return generator.toString();
};

var _Generator = require('./Generator');

var _Generator2 = _interopRequireDefault(_Generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }