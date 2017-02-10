import * as TYPES from './types';
// LENGTH
// INTEGER_1_99
// GAMMA
// STRAIGHT_ANGLE
// FRAME_LTWH
// FRAME_TRBL
// SIGMA

const COMMANDS = new Map([
  ['resize', new Map([
    ['args', {
      width: { type: TYPES.LENGTH, required: false, default: undefined },
      height: { type: TYPES.LENGTH, required: false, default: undefined },
    }],
  ])],
  ['crop', new Map([
    ['args', {
      position: { type: TYPES.CROP, required: false, default: undefined },
    }],
  ])],
  ['embed', new Map([])],
  ['max', new Map([])],
  ['min', new Map([])],
  ['ignoreAspectRatio', new Map([])],
  ['withoutEnlargement', new Map([])],


  ['rotate', new Map([
    ['args', {
      angle: { type: TYPES.STRAIGHT_ANGLE, required: false, default: 0 },
    }],
  ])],
  ['extract', new Map([
    ['args', {
      border: { type: TYPES.LENGTH, required: true, default: 10 },
    }],
  ])],
  ['extractFrame', new Map([
    ['aliasOf', 'extract'],
    ['args', {
      frame: { type: TYPES.FRAME_LTWH, required: true, default: undefined },
    }],
  ])],
  ['flip', new Map([
    ['args', {}],
  ])],
  ['flop', new Map([
    ['args', {}],
  ])],
  ['sharpen', new Map([
    ['args', {
      sigma: { type: TYPES.SIGMA, required: false, default: undefined },
      flat: { type: TYPES.LENGTH, required: false, default: undefined },
      jagged: { type: TYPES.LENGTH, required: false, default: undefined },
    }],
  ])],
  ['blur', new Map([
    ['args', {
      sigma: { type: TYPES.SIGMA, required: false, default: undefined },
    }],
  ])],
  ['extend', new Map([
    ['args', {
      border: { type: TYPES.LENGTH, required: true, default: 10 },
    }],
  ])],
  ['extendBorders', new Map([
    ['cmd', 'extend'],
    ['args', {
      frame: { type: TYPES.FRAME_TRBL, required: true, default: undefined },
    }],
  ])],
  ['flatten', new Map([])],
  ['trim', new Map([
    ['args', {
      tolerance: { type: TYPES.INTEGER_1_99, required: true, default: undefined },
    }],
  ])],
  ['gamma', new Map([
    ['args', {
      gamma: { type: TYPES.GAMMA, required: true, default: undefined },
    }],
  ])],
  ['negate', new Map([])],
  ['normalise', new Map([])],
  ['normalize', new Map([])],
  // convolve
  // threshold
  // boolean

  // background
  ['greyscale', new Map([])],
  ['grayscale', new Map([])],


]);

export default COMMANDS;

export const NAMES = Array.from(COMMANDS.keys());
