import 'react-native-gesture-handler';

import React from 'react';
import {StackNavigator} from './src/navigation/StackNavigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const MyTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: string;
//     // background: string;
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   },
// };

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
