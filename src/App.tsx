import React, { useState } from 'react';
import { RootStackNavigator } from './screens/navigators/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [user, setUser] = useState<Nullable<AppUser>>(null); // 로그인, 로그아웃 용도로 사용할 것임

  return (
    <NavigationContainer>
      <RootStackNavigator user={user} setUser={setUser} />
    </NavigationContainer>
  );
};

export default App;
