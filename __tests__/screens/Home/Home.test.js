import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import Home from '@/screens/Home';

describe('tests in Home Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<Home />);
  });

  test('renders correctly', () => {
    renderWithTheme(<Home />);
  });
});
