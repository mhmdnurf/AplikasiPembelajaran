import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  BackHandler,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Dashboard({navigation}: {navigation: any}) {
  const handleStart = () => {
    navigation.navigate('Menu');
  };

  const handleQuit = () => {
    Alert.alert('Keluar', 'Apakah anda yakin akan keluar dari aplikasi?', [
      {
        text: 'Tidak',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Ya',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
  };

  return (
    <>
      <StatusBar hidden={true} />

      <ImageBackground
        source={require('../assets/img/main_screen/main_1.jpg')}
        style={styles.imageContainer}
        imageStyle={{
          resizeMode: 'stretch',
        }}
        resizeMode="cover">
        <Pressable style={styles.btnQuit} onPress={handleQuit}>
          <Text style={styles.btnQuitText}>OUT</Text>
        </Pressable>
        <Pressable style={styles.btnContainer} onPress={handleStart}>
          <Text style={styles.btnText}>START</Text>
        </Pressable>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: width,
    height: height,
  },
  btnContainer: {
    position: 'absolute',
    width: width * 0.5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    left: width * 0.25,
    top: height * 0.665,
    backgroundColor: '#25925b',
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  btnQuit: {
    position: 'absolute',
    top: height * 0.02,
    left: width * 0.02,
    width: width * 0.2,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#a881d0',
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: '#8767ad',
    borderWidth: 3,
  },
  btnQuitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
});
