import React, { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import Header from '@/components/Header';
import colors from '@/theme/colors';

import Rates from './Rates';

const HomeScreen = () => {
  const isFocused = useIsFocused();

  return (
    <>
      <Header backgroundColor={colors.PRIMARY} isFocused={isFocused} />
      <Rates />
    </>
  );
};

export default HomeScreen;
