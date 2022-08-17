import React, {useContext} from 'react';
import {
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {fadeIn, opacity} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={40}
          color={colors.primary}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => finishLoading()}
        style={{
          //   width: '100%',
          //   height: 400,
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
