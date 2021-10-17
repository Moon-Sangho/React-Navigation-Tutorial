import React from 'react';
import { CompositeScreenProps } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = CompositeScreenProps<
  NativeStackScreenProps<BottomTabNavigator, 'SettingTabScreen'>,
  NativeStackScreenProps<MainStackNavigator>
> & { setUser: React.Dispatch<React.SetStateAction<Nullable<AppUser>>> };

export const SettingTabScreen = ({ navigation, setUser }: Props) => {
  const goToMyInformation = () => {
    navigation.navigate('SettingStackNavigator', {
      screen: 'MyInformationScreen',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>설정 탭</Text>
      <TouchableOpacity onPress={goToMyInformation} style={styles.button}>
        <Text>내 정보</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUser(null)} style={styles.button}>
        <Text>로그아웃</Text>
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
