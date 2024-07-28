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
        source={require('../assets/img/materi_1.jpg')}
        style={styles.imageContainer}>
        <Pressable style={styles.btnQuit} onPress={handleQuit}>
          <Text style={styles.btnQuitText}>Out</Text>
        </Pressable>
        <Pressable style={styles.btnContainer} onPress={handleStart}>
          <Text style={styles.btnText}>Start</Text>
        </Pressable>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width: 100,
    backgroundColor: '#25925b',
    borderRadius: 10,
    top: Dimensions.get('window').height - 315,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  btnQuit: {
    position: 'absolute',
    top: 16,
    left: 12,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#a881d0',
  },
  btnQuitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
});
