import React from 'react';

import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

export default function MenuMateri({navigation}: {navigation: any}) {
  return (
    <>
      <ImageBackground
        source={require('../assets/img/materi_5.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Pressable
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnPendahulua}
          onPress={() => navigation.navigate('Pendahuluan')}>
          <Text>.</Text>
        </Pressable>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    left: Dimensions.get('window').width / 17,
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
  btnPendahulua: {
    position: 'absolute',
    left: Dimensions.get('window').width / 5.65,
    top: Dimensions.get('window').height / 2.1,
    padding: 10,
    // backgroundColor: '#1e91c7',
    width: 75,
    height: 75,
  },
});
