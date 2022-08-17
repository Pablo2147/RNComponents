import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../context/themeContext/ThemeContext';

import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={menuItem.icon} size={25} color={colors.primary} />
          <Text style={{...styles.itemText, color: colors.text}}>
            {menuItem.name}
          </Text>
        </View>
        <Icon name="chevron-forward-outline" size={25} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
  },
});
