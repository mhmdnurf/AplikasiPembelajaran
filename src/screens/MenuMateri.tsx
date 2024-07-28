import React from 'react';

import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function MenuMateri({navigation}: {navigation: any}) {
  return (
    <>
      <ImageBackground
        source={require('../assets/img/main_screen/main_5.jpg')}
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
        <Pressable
          style={styles.btnPendahuluan}
          onPress={() => navigation.navigate('Pendahuluan')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnMateri}
          onPress={() => {
            navigation.navigate('Materi');
          }}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnLatihan}
          onPress={() => {
            navigation.navigate('Latihan');
          }}>
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
  btnPendahuluan: {
    position: 'absolute',
    top: height * 0.45,
    left: width * 0.195,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 0, 0.7)',
    // backgroundColor: '#1e91c7',
    width: 100,
    height: 100,
  },
  btnMateri: {
    position: 'absolute',
    top: height * 0.45,
    left: width * 0.45,
    padding: 10,
    width: 100,
    height: 100,
    // backgroundColor: '#1e91c7',
    backgroundColor: 'rgba(255, 255, 0, 0.7)',
  },
  btnLatihan: {
    position: 'absolute',
    top: height * 0.45,
    left: width * 0.705,
    padding: 10,
    width: 115,
    height: 100,
    // backgroundColor: '#1e91c7',
    backgroundColor: 'rgba(255, 255, 0, 0.7)',
  },
});
