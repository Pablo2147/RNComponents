import React, {useContext} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {FadeInImage} from '../components/FadeInImage';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 2000);
  };

  const renderItem = (item: number) => {
    return (
      //   <Image
      //     source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      //     style={{width: '100%', height: 400}}
      //   />
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{alignSelf: 'center'}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={20} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 200,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
