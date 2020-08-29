import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Search from './search.js';

describe('Search', () => {

  it(`Search renders correctly`, () => {
  	const div = document.createElement('div');
  	ReactDOM.render(
  	  <Search>Поиск</Search>,
  	  div
  	);
  	ReactDOM.unmountComponentAtNode(div);
  });

  test('есть корректный снимок', () => {
    const component = renderer.create(
      <Search>Поиск</Search>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
