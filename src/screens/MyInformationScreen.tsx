import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = NativeStackScreenProps<
  SettingStackNavigator,
  'MyInformationScreen'
> & { user: AppUser };

export const MyInformationScreen = ({ navigation, user }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>내 정보</Text>
      <Text style={styles.name}>이름: {user.name}</Text>
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
  name: {
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
