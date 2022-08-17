import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_dark_theme'} | {type: 'set_light_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  divideColor: string;
  placeholderColor?: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  divideColor: 'rgb(200, 200, 200)',
  colors: {
    primary: '#5856D6',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'rgb(150, 150, 150)',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  divideColor: 'rgb(200, 200, 200)',
  placeholderColor: 'rgb(100, 100, 100)',
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'rgb(100, 100, 100)',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
