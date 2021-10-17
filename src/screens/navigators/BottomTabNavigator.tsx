import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountTabScreen } from '../AccountTabScreen';
import { PortfolioTabScreen } from '../PortfolioTabScreen';
import { SettingTabScreen } from '../SettingTabScreen';

const BottomTab = createBottomTabNavigator<BottomTabNavigator>();

export const BottomTabNavigator = ({
  user,
  setUser,
}: {
  user: AppUser;
  setUser: React.Dispatch<React.SetStateAction<Nullable<AppUser>>>;
}) => {
  return (
    <BottomTab.Navigator initialRouteName="PortfolioTabScreen">
      <BottomTab.Screen
        name="PortfolioTabScreen"
        options={{ tabBarLabel: '포트폴' }}>
        {props => <PortfolioTabScreen {...props} user={user} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="AccountTabScreen"
        component={AccountTabScreen}
        options={{ tabBarLabel: '계좌' }}
      />
      <BottomTab.Screen
        name="SettingTabScreen"
        options={{ tabBarLabel: '설정' }}>
        {props => <SettingTabScreen setUser={setUser} {...props} />}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
};
