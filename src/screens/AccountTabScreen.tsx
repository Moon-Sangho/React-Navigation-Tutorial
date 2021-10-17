import { CompositeScreenProps } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = CompositeScreenProps<
  NativeStackScreenProps<BottomTabNavigator, 'AccountTabScreen'>,
  NativeStackScreenProps<MainStackNavigator>
>;

export const AccountTabScreen = ({ navigation }: Props) => {
  const goToMyAccount = () => {
    navigation.navigate('AccountStackNavigator', {
      screen: 'MyAccountScreen',
      params: {
        balance: 10000, // navigator.d.ts 파일에서 타입을 지정했던 대로 number type의 params를 넘겨줍니다.
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>계좌 탭</Text>
      <TouchableOpacity onPress={goToMyAccount} style={styles.button}>
        <Text>나의 계좌</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
