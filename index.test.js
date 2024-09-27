// @flow

// $FlowFixMe[cannot-resolve-module] Will need to be added to flow-typed node env.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { add, isString } from './index.js';

describe('add', () => {
  it('should return the sum of params', () => {
    assert.equal(add(1, 2), 3);
  });
});

describe('isString', () => {
  it('should assert whether the type of param is a string', () => {
    assert.equal(isString(''), true);
    assert.equal(isString(123), false);
  });
});
