// Copyright 2004-present Facebook. All Rights Reserved.

'use strict';

import React from 'react';
import Clock from '../components/Clock';
import renderer from 'react-test-renderer';

jest.useFakeTimers();               
Date.now = jest.fn(() => 1482463367071);

it('renders correctly', () => {
  const tree = renderer.create(<Clock />).toJSON();
  expect(tree).toMatchSnapshot();
});