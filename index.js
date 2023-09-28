// @flow

export function add(a /*: number */, b /*: number */) /*: number */ {
  return a + b;
}

add(1, 2);

// $FlowExpectedError
add('one', 'two');

export function isString(value /*: mixed */) /*: value is string */ {
  return typeof value === 'string';
}

isString('test');
