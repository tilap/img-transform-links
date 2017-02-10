'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var value = _ref.value,
      required = _ref.required,
      validator = _ref.validator;

  if (value === undefined) {
    if (required) {
      throw new Error('required');
    }
    return value;
  }

  if (validator) {
    try {
      validator(value);
    } catch (error) {
      throw new Error(error.message || error);
    }
  }
  return value;
};