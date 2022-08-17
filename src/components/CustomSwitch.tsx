import React, {useContext, useState} from 'react';
import {Platform, Switch} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (event: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  const {
    theme: {colors, currentTheme},
  } = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      ios_backgroundColor={
        Platform.OS === 'ios' && currentTheme === 'dark' ? '#D9D9DB' : ''
      }
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
