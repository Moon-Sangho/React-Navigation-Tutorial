import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../SignInScreen';

const Stack = createNativeStackNavigator<AuthStackNavigator>();

export const AuthStackNavigator = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<Nullable<AppUser>>>;
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen">
        {props => <SignInScreen setUser={setUser} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
