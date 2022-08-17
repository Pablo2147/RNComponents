import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true},
    );
  };

  const showPrompt = () => {
    // Alert.prompt(
    //   'Enter your name',
    //   'Use only letters',
    //   value => console.log(`Value: ${value}`),
    //   'plain-text',
    //   'Hello world',
    //   'email-address',
    // );

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};
