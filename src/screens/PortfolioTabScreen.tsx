import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/core';

// 서로 다른 Navigator 간의 이동이 필요할 땐 아래와 같이 props 타입을 지정합니다.
// 그리고 stack navigator가 버전 업이 되면서 이름이 NativeStackScreenProps라고 변경된 것 같습니다.
// 현재 arumdree-app 프로젝트 내에는 StackScreenProps로 설정되어 있습니다.

type Props = CompositeScreenProps<
  NativeStackScreenProps<BottomTabNavigator, 'PortfolioTabScreen'>,
  NativeStackScreenProps<MainStackNavigator> // 현재 Navigator의 부모 Navigator로 설정
> & { user: AppUser };

export const PortfolioTabScreen = ({ user, navigation }: Props) => {
  const goToMyPortfolio = () => {
    navigation.navigate('MyPortfolioScreen', {
      stocks: ['네이버', '카카오', '삼성전자'], // navigator.d.ts 파일에서 타입을 지정했던 대로 string[] 타입으로 params를 넘겨줍니다.
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>포트폴리오 탭</Text>
      <View style={styles.greetings}>
        <Text>안녕하세요 {user.name}님</Text>
      </View>
      <TouchableOpacity onPress={goToMyPortfolio} style={styles.button}>
        <Text>내 포트폴리오 확인</Text>
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
  greetings: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
