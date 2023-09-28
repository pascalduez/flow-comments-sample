// @flow

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { add } from './index.js';

describe('add', () => {
  it('should return the sum of params', () => {
    assert.equal(add(1, 2), 3);
  });
});
