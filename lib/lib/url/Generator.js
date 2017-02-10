'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Generator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return new Generator();
};

var _separators = require('../separators');

var _castCommand2 = require('./castCommand');

var _castCommand3 = _interopRequireDefault(_castCommand2);

var _convertValueToString = require('./utils/convertValueToString');

var _convertValueToString2 = _interopRequireDefault(_convertValueToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generator = exports.Generator = function () {
  function Generator() {
    _classCallCheck(this, Generator);

    this.commands = [];
  }

  _createClass(Generator, [{
    key: 'add',
    value: function add(command) {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var _castCommand = (0, _castCommand3.default)(command, params),
          argsCast = _castCommand.args;

      var paramStr = argsCast.map(function (elemt) {
        return (0, _convertValueToString2.default)(elemt, _separators.ARGS_OBJECT);
      }).join(_separators.ARGS);

      var separator = paramStr.length > 0 ? _separators.COMMAND_ARGS : '';
      this.commands.push('' + command + separator + paramStr);
      return this;
    }
  }, {
    key: 'get',
    value: function get() {
      return this.commands.join(_separators.COMMANDS);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.get();
    }
  }]);

  return Generator;
}();