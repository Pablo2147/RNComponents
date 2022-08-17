import React from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <HeaderTitle title="Modal" />

      <Button
        title="Open modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Modal Content */}
          <View
            style={{
              backgroundColor: 'white',
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 40,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>
              Modal title
            </Text>
            <Text style={{fontSize: 18, marginBottom: 20}}>Modal body</Text>
            <Button
              title="Close"
              onPress={() => {
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
