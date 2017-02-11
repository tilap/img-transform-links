'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generator = exports.cast = exports.build = exports.parse = exports.UrlGenerator = undefined;

var _Generator = require('./Generator');

var _Generator2 = _interopRequireDefault(_Generator);

var _castCommand = require('./castCommand');

var _castCommand2 = _interopRequireDefault(_castCommand);

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var _build = require('./build');

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UrlGenerator = exports.UrlGenerator = _Generator2.default;

var parse = exports.parse = _parse2.default;
var build = exports.build = _build2.default;
var cast = exports.cast = _castCommand2.default;

var generator = exports.generator = function generator() {
  return new UrlGenerator();
};