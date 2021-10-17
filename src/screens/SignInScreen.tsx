import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const SignInScreen = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<Nullable<AppUser>>>;
}) => {
  const login = () => {
    setUser({ name: 'Tom' });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
