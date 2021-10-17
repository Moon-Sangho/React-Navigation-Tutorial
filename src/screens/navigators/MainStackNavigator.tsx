import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './BottomTabNavigator';
import { AccountStackNavigator } from './AccountStackNavigator';
import { SettingStackNavigator } from './SettingStackNavigator';
import { MyPortfolioScreen } from '../MyPortfolioScreen';

const Stack = createNativeStackNavigator<MainStackNavigator>();

export const MainStackNavigator = ({
  user,
  setUser,
}: {
  user: AppUser;
  setUser: React.Dispatch<React.SetStateAction<Nullable<AppUser>>>;
}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabNavigator">
        {props => (
          <BottomTabNavigator user={user} setUser={setUser} {...props} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="AccountStackNavigator"
        component={AccountStackNavigator}
      />

      <Stack.Screen name="SettingStackNavigator">
        {props => <SettingStackNavigator user={user} {...props} />}
      </Stack.Screen>
      <Stack.Screen name="MyPortfolioScreen" component={MyPortfolioScreen} />
    </Stack.Navigator>
  );
};
