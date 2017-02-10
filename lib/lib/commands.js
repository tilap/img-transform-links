'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAMES = undefined;

var _types = require('./types');

var TYPES = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// LENGTH
// INTEGER_1_99
// GAMMA
// STRAIGHT_ANGLE
// FRAME_LTWH
// FRAME_TRBL
// SIGMA

var COMMANDS = new Map([['resize', new Map([['args', {
  width: { type: TYPES.LENGTH, required: false, default: undefined },
  height: { type: TYPES.LENGTH, required: false, default: undefined }
}]])], ['crop', new Map([['args', {
  position: { type: TYPES.CROP, required: false, default: undefined }
}]])], ['embed', new Map([])], ['max', new Map([])], ['min', new Map([])], ['ignoreAspectRatio', new Map([])], ['withoutEnlargement', new Map([])], ['rotate', new Map([['args', {
  angle: { type: TYPES.STRAIGHT_ANGLE, required: false, default: 0 }
}]])], ['extract', new Map([['args', {
  border: { type: TYPES.LENGTH, required: true, default: 10 }
}]])], ['extractFrame', new Map([['aliasOf', 'extract'], ['args', {
  frame: { type: TYPES.FRAME_LTWH, required: true, default: undefined }
}]])], ['flip', new Map([['args', {}]])], ['flop', new Map([['args', {}]])], ['sharpen', new Map([['args', {
  sigma: { type: TYPES.SIGMA, required: false, default: undefined },
  flat: { type: TYPES.LENGTH, required: false, default: undefined },
  jagged: { type: TYPES.LENGTH, required: false, default: undefined }
}]])], ['blur', new Map([['args', {
  sigma: { type: TYPES.SIGMA, required: false, default: undefined }
}]])], ['extend', new Map([['args', {
  border: { type: TYPES.LENGTH, required: true, default: 10 }
}]])], ['extendBorders', new Map([['cmd', 'extend'], ['args', {
  frame: { type: TYPES.FRAME_TRBL, required: true, default: undefined }
}]])], ['flatten', new Map([])], ['trim', new Map([['args', {
  tolerance: { type: TYPES.INTEGER_1_99, required: true, default: undefined }
}]])], ['gamma', new Map([['args', {
  gamma: { type: TYPES.GAMMA, required: true, default: undefined }
}]])], ['negate', new Map([])], ['normalise', new Map([])], ['normalize', new Map([])],
// convolve
// threshold
// boolean

// background
['greyscale', new Map([])], ['grayscale', new Map([])]]);

exports.default = COMMANDS;
var NAMES = exports.NAMES = Array.from(COMMANDS.keys());