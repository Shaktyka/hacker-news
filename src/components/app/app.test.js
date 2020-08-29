import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './app.js';

describe('App', () => {

  it('App renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test('App: есть корректный снимок', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
