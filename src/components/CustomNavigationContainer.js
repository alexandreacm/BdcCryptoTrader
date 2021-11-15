import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';

const CustomNavigationContainer = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

CustomNavigationContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default CustomNavigationContainer;
