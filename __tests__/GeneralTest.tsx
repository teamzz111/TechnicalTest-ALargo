// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

jest.mock('@react-native-firebase/analytics', () => {
  return () => ({
    logEvent: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn(),
  });
});


it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
