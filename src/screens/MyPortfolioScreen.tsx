import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = NativeStackScreenProps<MainStackNavigator, 'MyPortfolioScreen'>;

export const MyPortfolioScreen = ({ navigation, route }: Props) => {
  const { stocks } = route.params; // PortfolioTabScreen에서 전달받은 params를 아래와 같이 사용할 수 있습니다.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>나의 포트폴리오</Text>
      {stocks?.map((stock, index) => (
        <Text key={index} style={styles.stocks}>
          {stock}
        </Text>
      ))}
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
  stocks: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
