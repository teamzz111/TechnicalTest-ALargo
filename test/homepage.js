// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import Home from '../src/screens/home';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create( 
    <Home/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});