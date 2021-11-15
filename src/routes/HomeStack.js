import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/Home';
import Detail from '@/screens/Detail';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Home'
      headerMode='none'
    >
      <Screen name='Home' component={Home} />
      <Screen name='Detail' component={Detail} />
    </Navigator>
  );
};

export default HomeStack;
