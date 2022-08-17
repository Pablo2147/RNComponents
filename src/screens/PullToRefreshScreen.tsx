import React, {useContext} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setData('Hello world');
      setRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.primary}
          colors={['yellow', 'orange', 'cyan']}
          //   style={{backgroundColor: '#5856D6'}}
          tintColor={colors.primary}
          title="refreshing..."
          titleColor={colors.primary}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        <Text style={{color: colors.text}}>{data}</Text>
      </View>
    </ScrollView>
  );
};
