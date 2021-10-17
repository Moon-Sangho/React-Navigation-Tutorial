import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackNavigator } from './AuthStackNavigator';
import { MainStackNavigator } from './MainStackNavigator';

// 아래 설정한 Stack 상수를 기반으로, Stack.Navigator, Stack.Screen을 구성합니다.
const Stack = createNativeStackNavigator<RootStackNavigator>();

export const RootStackNavigator = ({
  user,
  setUser,
}: {
  user: Nullable<AppUser>;
  setUser: React.Dispatch<React.SetStateAction<Nullable<AppUser>>>;
}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="AuthStackNavigator">
          {props => <AuthStackNavigator setUser={setUser} {...props} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainStackNavigator">
          {props => (
            <MainStackNavigator user={user} setUser={setUser} {...props} />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
