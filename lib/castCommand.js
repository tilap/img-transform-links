'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (command) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  (0, _assert2.default)(_commands.NAMES.indexOf(command) > -1, 'Unkown transformation "' + command + '"');

  var cfg = _commands2.default.get(command);
  var argsConfig = cfg.has('args') ? cfg.get('args') : {};
  var alias = cfg.has('aliasOf') ? cfg.get('aliasOf') : undefined;

  var castedParams = Object.keys(argsConfig).map(function (property, index) {
    var config = argsConfig[property];
    var defaultValue = Object.prototype.hasOwnProperty.call(config, 'default') ? config.default : undefined;

    var value = args.length >= index ? args[index] : defaultValue;
    var required = config.required;
    var validator = config.type && config.type.has('validate') ? config.type.get('validate') : null;
    var caster = config.type && config.type.has('cast') ? config.type.get('cast') : null;

    try {
      (0, _validateParam2.default)({ value: value, required: required, validator: validator });
    } catch (error) {
      throw new Error('Property ' + property + ' no valid (arg #' + (index + 1) + ' of "' + command + '"): ' + error.message);
    }

    try {
      return (0, _castParam2.default)({ value: value, caster: caster });
    } catch (error) {
      throw new Error('Property ' + property + ' cast failed (arg #' + (index + 1) + ' of "' + command + '"): ' + error.message);
    }
  });

  return {
    command: alias || command,
    args: castedParams
  };
};

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _commands = require('./lib/commands');

var _commands2 = _interopRequireDefault(_commands);

var _validateParam = require('./lib/utils/validateParam');

var _validateParam2 = _interopRequireDefault(_validateParam);

var _castParam = require('./lib/utils/castParam');

var _castParam2 = _interopRequireDefault(_castParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }