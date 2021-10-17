import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyAccountScreen } from '../MyAccountScreen';

const Stack = createNativeStackNavigator<AccountStackNavigator>();

export const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
    </Stack.Navigator>
  );
};
