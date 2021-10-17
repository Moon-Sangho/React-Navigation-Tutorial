import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyInformationScreen } from '../MyInformationScreen';

const Stack = createNativeStackNavigator<SettingStackNavigator>();

export const SettingStackNavigator = ({ user }: { user: AppUser }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyInformationScreen">
        {props => <MyInformationScreen user={user} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
