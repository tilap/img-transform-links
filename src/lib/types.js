import assert from 'assert';

const gravity = {
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
  topleft: 8,
};
const strategy = { entropy: 16, attention: 17 };

export const CROP = new Map([
  ['validate', (x) => {
    assert(
      Object.keys(gravity).indexOf(`${x}`) > -1 ||
      Object.keys(strategy).indexOf(`${x}`) > -1,
    'Expect a crop position value');
  }],
  ['cast', x => (Object.prototype.hasOwnProperty.call(gravity, x) ? gravity[x] : strategy[x])],
]);

export const LENGTH = new Map([
  ['validate', (x, message = '') => {
    assert(`${x}`.match(/^\d+$/), message || 'Expect positive integer');
  }],
  ['cast', x => Number(x)],
]);

export const INTEGER_1_99 = new Map([
  ['validate', (x, message = '') => {
    assert(`${x}`.match(/^\d+$/), message || 'Expect positive integer');
    assert(Number(x) > 0 && Number(x) < 100, 'Expect integer between 1 and 99');
  }],
  ['cast', x => Number(x)],
]);

export const GAMMA = new Map([
  ['validate', (x) => {
    assert(Number(x) >= 1.0 && Number(x) <= 3.0, 'Expect integer between 1.0 and 3.0');
  }],
  ['cast', x => Number(x)],
]);

export const STRAIGHT_ANGLE = new Map([
  ['validate', (x) => {
    assert(['0', '90', '180', '270'].indexOf(`${x}`) > -1, 'Expect 0, 90, 180 or 270');
  }],
  ['cast', x => Number(x)],
]);

export const FRAME_LTWH = new Map([
  ['validate', (x) => {
    assert(x.constructor === Object, 'Expect an object');
    ['left', 'top', 'width', 'height'].forEach((prop) => {
      try {
        assert(Object.prototype.hasOwnProperty.call(x, prop), `expect an object with key "${prop}"`);
        LENGTH.get('validate')(x[prop], `expect the key object "${prop}" to be a valid length`);
      } catch (error) {
        throw new Error(`invalid frame type, ${error.message}`);
      }
    });
  }],
  ['cast', (x) => {
    const res = {};
    ['left', 'top', 'width', 'height'].forEach((prop) => {
      res[prop] = LENGTH.get('cast')(x[prop]);
    });
    return res;
  }],
]);

export const FRAME_TRBL = new Map([
  ['validate', (x) => {
    assert(x.constructor === Object, 'Expect an object');
    ['top', 'left', 'bottom', 'right'].forEach((prop) => {
      try {
        assert(Object.prototype.hasOwnProperty.call(x, prop), `expect an object with key "${prop}"`);
        LENGTH.get('validate')(x[prop], `expect the key object "${prop}" to be a valid length`);
      } catch (error) {
        throw new Error(`invalid frame type, ${error.message}`);
      }
    });
  }],
  ['cast', (x) => {
    const res = {};
    ['top', 'left', 'bottom', 'right'].forEach((prop) => {
      res[prop] = LENGTH.get('cast')(x[prop]);
    });
    return res;
  }],
]);

export const SIGMA = new Map([
  ['validate', (x) => {
    assert(`${x}`.match(/^\d+$/), 'Expect positive integer');
    assert(Number(x) >= 1, 'Expect to be more than 1');
  }],
  ['cast', x => Number(x)],
]);
