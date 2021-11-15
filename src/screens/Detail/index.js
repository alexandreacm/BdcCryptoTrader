import React from 'react';
import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Header from '@/components/Header';

import colors from '@/theme';

const DetailScreen = () => {
  const isFocused = useIsFocused();

  return (
    <View>
      <Header
        showBackButton
        onBackPress={() => {}}
        backgroundColor={colors.PRIMARY}
        isFocused={isFocused}
      />
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
