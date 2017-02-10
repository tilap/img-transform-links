'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGMA = exports.FRAME_TRBL = exports.FRAME_LTWH = exports.STRAIGHT_ANGLE = exports.GAMMA = exports.INTEGER_1_99 = exports.LENGTH = exports.CROP = undefined;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gravity = {
  center: 0,
  centre: 0,
  north: 1,
  top: 1,
  east: 2,
  right: 2,
  south: 3,
  bottom: 3,
  west: 4,
  left: 4,
  northeast: 5,
  topright: 5,
  southeast: 6,
  bottomright: 6,
  southwest: 7,
  bottomleft: 7,
  northwest: 8,
  topleft: 8
};
var strategy = { entropy: 16, attention: 17 };

var CROP = exports.CROP = new Map([['validate', function (x) {
  (0, _assert2.default)(Object.keys(gravity).indexOf('' + x) > -1 || Object.keys(strategy).indexOf('' + x) > -1, 'Expect a crop position value');
}], ['cast', function (x) {
  return Object.prototype.hasOwnProperty.call(gravity, x) ? gravity[x] : strategy[x];
}]]);

var LENGTH = exports.LENGTH = new Map([['validate', function (x) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assert2.default)(('' + x).match(/^\d+$/), message || 'Expect positive integer');
}], ['cast', function (x) {
  return Number(x);
}]]);

var INTEGER_1_99 = exports.INTEGER_1_99 = new Map([['validate', function (x) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assert2.default)(('' + x).match(/^\d+$/), message || 'Expect positive integer');
  (0, _assert2.default)(Number(x) > 0 && Number(x) < 100, 'Expect integer between 1 and 99');
}], ['cast', function (x) {
  return Number(x);
}]]);

var GAMMA = exports.GAMMA = new Map([['validate', function (x) {
  (0, _assert2.default)(Number(x) >= 1.0 && Number(x) <= 3.0, 'Expect integer between 1.0 and 3.0');
}], ['cast', function (x) {
  return Number(x);
}]]);

var STRAIGHT_ANGLE = exports.STRAIGHT_ANGLE = new Map([['validate', function (x) {
  (0, _assert2.default)(['0', '90', '180', '270'].indexOf('' + x) > -1, 'Expect 0, 90, 180 or 270');
}], ['cast', function (x) {
  return Number(x);
}]]);

var FRAME_LTWH = exports.FRAME_LTWH = new Map([['validate', function (x) {
  (0, _assert2.default)(x.constructor === Object, 'Expect an object');
  ['left', 'top', 'width', 'height'].forEach(function (prop) {
    try {
      (0, _assert2.default)(Object.prototype.hasOwnProperty.call(x, prop), 'expect an object with key "' + prop + '"');
      LENGTH.get('validate')(x[prop], 'expect the key object "' + prop + '" to be a valid length');
    } catch (error) {
      throw new Error('invalid frame type, ' + error.message);
    }
  });
}], ['cast', function (x) {
  var res = {};
  ['left', 'top', 'width', 'height'].forEach(function (prop) {
    res[prop] = LENGTH.get('cast')(x[prop]);
  });
  return res;
}]]);

var FRAME_TRBL = exports.FRAME_TRBL = new Map([['validate', function (x) {
  (0, _assert2.default)(x.constructor === Object, 'Expect an object');
  ['top', 'left', 'bottom', 'right'].forEach(function (prop) {
    try {
      (0, _assert2.default)(Object.prototype.hasOwnProperty.call(x, prop), 'expect an object with key "' + prop + '"');
      LENGTH.get('validate')(x[prop], 'expect the key object "' + prop + '" to be a valid length');
    } catch (error) {
      throw new Error('invalid frame type, ' + error.message);
    }
  });
}], ['cast', function (x) {
  var res = {};
  ['top', 'left', 'bottom', 'right'].forEach(function (prop) {
    res[prop] = LENGTH.get('cast')(x[prop]);
  });
  return res;
}]]);

var SIGMA = exports.SIGMA = new Map([['validate', function (x) {
  (0, _assert2.default)(('' + x).match(/^\d+$/), 'Expect positive integer');
  (0, _assert2.default)(Number(x) >= 1, 'Expect to be more than 1');
}], ['cast', function (x) {
  return Number(x);
}]]);