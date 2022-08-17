import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors, currentTheme},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />

      <TouchableOpacity
        onPress={currentTheme === 'light' ? setDarkTheme : setLightTheme}
        activeOpacity={0.8}
        style={{
          backgroundColor: colors.primary,
          width: 150,
          height: 50,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};
