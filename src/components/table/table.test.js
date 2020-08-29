import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Table from './table.js';

const props = {
  list: [
    { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
    { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
  ],
};

describe('Table', () => {

  it(`Table renders correctly`, () => {
  	const div = document.createElement('div');
  	ReactDOM.render(
  	  <Table {...props} />,
  	  div
  	);
  	ReactDOM.unmountComponentAtNode(div);
  });

  test('есть корректный снимок', () => {
    const component = renderer.create(
      <Table {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
