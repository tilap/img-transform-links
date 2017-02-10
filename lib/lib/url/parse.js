'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _separators = require('../separators');

var _convertStringToValue = require('./utils/convertStringToValue');

var _convertStringToValue2 = _interopRequireDefault(_convertStringToValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var result = [];

  if (!string) {
    return result;
  }

  var commandsStrings = string.split(_separators.COMMANDS);
  commandsStrings.forEach(function (commandStr) {
    var cmdResult = { command: '', args: [] };
    var res = commandStr.split(_separators.COMMAND_ARGS);
    (0, _assert2.default)(res[0], 'No command found');
    cmdResult.command = res[0];

    if (res[1]) {
      var argsStr = res[1].split(_separators.ARGS);
      cmdResult.args = argsStr.map(function (k) {
        return (0, _convertStringToValue2.default)(k, _separators.ARGS_OBJECT);
      });
    }

    result.push(cmdResult);
  });

  return result;
}