/* global describe, it */
/* eslint-disable no-restricted-syntax */
import { expect } from 'chai';
import { generator } from '../lib/';

expect();

const tests = new Map([
  ['rotate', new Map([
    [[], 'rotate'],
    [[90], 'rotate--90'],
    [[90, 90], 'rotate--90'],
    [[123], Error],
    [['toto'], Error],
  ])],
  ['extract', new Map([
    [[], Error],
    [[100], 'extract--100'],
    [[100, 100], 'extract--100'],
    [['toto'], Error],
  ])],
  ['extractFrame', new Map([
    [[], Error],
    [[{}], Error],
    [[{ top: 100, right: 100, left: 100, bottom: 100 }], 'extractFrame--top=100,left=100,bottom=100,right=100'],
  ])],
  ['flip', new Map([
    [[], 'flip'],
    [[100], 'flip'],
  ])],
  ['flop', new Map([
    [[], 'flop'],
    [[100], 'flop'],
  ])],
  ['sharpen', new Map([
    [[], 'sharpen--__'],
    [[undefined, 1, 1], 'sharpen--_1_1'],
    [[1, 1, 1], 'sharpen--1_1_1'],
  ])],
  ['blur', new Map([
    [[], 'blur'],
    [[10], 'blur--10'],
  ])],
]);

describe('generator', () => {
  for (const [command, description] of tests) {
    describe(`command ${command}`, () => {
      for (const [args, expected] of description) {
        const fullArgs = [command, ...args];
        const argsStr = args.map(k => (k && k.constructor === Object ?
          `{ ${Object.keys(k).map(key => `${key}: ${k[key]}`).join(', ')} }`
          : k
        )).join(', ');
        const argsWording = args.length > 0 ?
            `if ${args.length === 1 ? 'arg is' : 'args are'} "${argsStr}"` :
            'if no arg';

        if (expected.constructor === String) {
          it(`output "${expected}" ${argsWording}`, () => {
            expect(generator().add(...fullArgs).toString()).to.equal(expected);
          });
        } else if (expected === Error) {
          it(`throw and Error ${argsWording}`, () => {
            let res;
            try {
              res = generator().add(...fullArgs).toString();
            } catch (error) {
              res = error;
            }
            expect(res).to.be.an.instanceof(Error);
          });
        }
      }
    });
  }
});

