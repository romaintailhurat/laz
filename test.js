import { install } from 'mocha-testcheck';
import { getRandomIntInclusive } from './index.js';
import assert from 'assert';

install();

describe('Dice', function () {

  check.it(
    'produces positive integer when x and y are positive integers',
    { times: 10 },
    [gen.strictPosInt, gen.strictPosInt],
    (x, y) => {
      assert(getRandomIntInclusive(x, y) > 0);
    });

  check.it(
    'produces negative integer when x and y are negative integers',
    { times: 10 },
    [gen.strictNegInt, gen.strictNegInt],
    (x, y) => {
      assert(getRandomIntInclusive(x, y) < 0);
    }
  );
});
