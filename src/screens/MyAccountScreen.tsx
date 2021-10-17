import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = NativeStackScreenProps<AccountStackNavigator, 'MyAccountScreen'>;

export const MyAccountScreen = ({ navigation, route }: Props) => {
  const { balance } = route.params; // AccountTabScreen에서 전달받은 params를 사용할 수 있습니다.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>나의 계좌</Text>
      <Text style={styles.balance}>잔액: {balance} 원</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Text>뒤로가기</Text>
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
  balance: {
    margin: 10,
  },
  button: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
