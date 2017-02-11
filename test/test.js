/* global describe, it */
/* eslint-disable no-restricted-syntax */
import { expect } from 'chai';
import { generator } from '../lib/';
import { build } from '../lib/';

expect();

const tests = new Map([
  ['rotate', new Map([
    [[], 'rotate'],
    [[90], 'rotate--90'],
    [[90, 180], 'rotate--90'],
    [[123], Error],
    [['toto'], Error],
  ])],
  ['extract', new Map([
    [[], Error],
    [[100], 'extract--100'],
    [[100, 200], 'extract--100'],
    [['toto'], Error],
  ])],
  ['extractFrame', new Map([
    [[], Error],
    [[{}], Error],
    [[{ top: 10, left: 20, width: 30, height: 40 }], 'extractFrame--left=20,top=10,width=30,height=40'],
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
    [[undefined, 1, 2], 'sharpen--_1_2'],
    [[1, 2, 3], 'sharpen--1_2_3'],
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
        // Test wordings to make it clear
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
            expect(build([fullArgs])).to.equal(expected);
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

