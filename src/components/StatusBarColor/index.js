/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import colors from '@/theme/colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});

const StatusBarColor = ({ backgroundColor, isPrimaryColorDark, ...rest }) => {
  return (
    <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={isPrimaryColorDark ? 'light-content' : 'dark-content'}
        {...rest}
      />
    </SafeAreaView>
  );
};

StatusBarColor.defaultProps = {
  backgroundColor: colors.PRIMARY,
  isPrimaryColorDark: true
};

StatusBarColor.propTypes = {
  backgroundColor: PropTypes.string,
  isPrimaryColorDark: PropTypes.bool
};

export default StatusBarColor;
