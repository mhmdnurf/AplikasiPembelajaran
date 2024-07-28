import React from 'react';

import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function Petunjuk({navigation}: {navigation: any}) {
  return (
    <>
      <ImageBackground
        source={require('../assets/img/materi_3.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Pressable
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/back_icon.png')}
            style={styles.imgButton}
          />
        </Pressable>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    left: 0,
    bottom: Dimensions.get('window').height / 26,
    padding: 10,
    // backgroundColor: '#1e91c7',
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
