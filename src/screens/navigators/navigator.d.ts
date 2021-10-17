type RootStackNavigator = {
  AuthStackNavigator: import('@react-navigation/native').NavigatorScreenParams<AuthStackNavigator>;
  MainStackNavigator: import('@react-navigation/native').NavigatorScreenParams<MainStackNavigator>;
};

type AuthStackNavigator = {
  SignInScreen: undefined;
};

type MainStackNavigator = {
  BottomTabNavigator: import('@react-navigation/native').NavigatorScreenParams<BottomTabNavigator>;
  AccountStackNavigator: import('@react-navigation/native').NavigatorScreenParams<AccountStackNavigator>;
  SettingStackNavigator: import('@react-navigation/native').NavigatorScreenParams<SettingStackNavigator>;
  MyPortfolioScreen: {
    stocks: string[];
  };
};

type AccountStackNavigator = {
  MyAccountScreen: {
    balance: number;
  };
};

type SettingStackNavigator = {
  MyInformationScreen: undefined;
};

type BottomTabNavigator = {
  PortfolioTabScreen: undefined;
  AccountTabScreen: undefined;
  SettingTabScreen: undefined;
};
