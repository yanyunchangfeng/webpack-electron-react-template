import { App } from 'src/workbench/electron-renderer';
import { create } from 'react-test-renderer';
import React from 'react';
describe('render App test', () => {
  it('render App correctly', () => {
    const testRenderInstance = create(<App />);
    expect(testRenderInstance.toJSON()).toMatchSnapshot();
  });
});
