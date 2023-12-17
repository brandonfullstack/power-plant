import { changeState } from './../src/index.js';

describe('changeState', () => {

  test('should return a function', () => {
    const stateChange = changeState('soil');
    expect(typeof stateChange).toEqual("function");
  });

  test('')
});