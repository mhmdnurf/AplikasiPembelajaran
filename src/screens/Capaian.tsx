import React from 'react';

import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function Capaian({navigation}: {navigation: any}) {
  return (
    <>
      <ImageBackground
        source={require('../assets/img/main_screen/main_6.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="stretch">
        <Pressable
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}>
          <Text>.</Text>
        </Pressable>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    left: width * 0.0975,
    bottom: height * 0.03,
    padding: 10,
    // backgroundColor: '#1e91c7',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  imgButton: {width: 10, height: 10},
});
