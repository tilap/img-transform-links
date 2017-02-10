'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var value = _ref.value,
      caster = _ref.caster;

  if (value === undefined) {
    return '';
  }
  return caster ? caster(value) : value;
};