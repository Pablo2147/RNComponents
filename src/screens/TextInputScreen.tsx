import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  //   const [form, setForm] = useState({
  //     name: '',
  //     email: '',
  //     phone: '',
  //   });

  //   const onChange = (value: string, field: string) => {
  //     setForm({
  //       ...form,
  //       [field]: value,
  //     });
  //   };

  const {
    theme: {colors, placeholderColor},
  } = useContext(ThemeContext);

  const {form, onChange, isSubcribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubcribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />

            <TextInput
              style={{
                ...stylesInputs.input,
                borderColor: colors.border,
                color: colors.text,
              }}
              placeholder="Enter your Name"
              placeholderTextColor={placeholderColor}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              keyboardAppearance="dark"
            />
            <TextInput
              style={{
                ...stylesInputs.input,
                borderColor: colors.border,
                color: colors.text,
              }}
              placeholder="Enter your Email"
              placeholderTextColor={placeholderColor}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <View style={stylesInputs.switchRow}>
              <Text style={{...stylesInputs.switchText, color: colors.text}}>
                Subscribe
              </Text>
              <CustomSwitch
                isOn={isSubcribed}
                onChange={value => onChange(value, 'isSubcribed')}
              />
            </View>
            <Text style={{fontSize: 26, color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{fontSize: 26, color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <TextInput
              style={{
                ...stylesInputs.input,
                borderColor: colors.border,
                color: colors.text,
              }}
              placeholder="Enter your Phone"
              placeholderTextColor={placeholderColor}
              autoCorrect={false}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesInputs = StyleSheet.create({
  input: {
    // borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  switchText: {
    fontSize: 25,
  },
});
