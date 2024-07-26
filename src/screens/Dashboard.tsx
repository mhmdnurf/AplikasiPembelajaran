import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  BackHandler,
  StatusBar,
} from 'react-native';

export default function Dashboard({navigation}: {navigation: any}) {
  const handleStart = () => {
    navigation.navigate('Menu');
  };
  const handleQuit = () => {
    BackHandler.exitApp();
  };
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../assets/main_background.jpeg')}
        style={styles.imageContainer}>
        <Pressable style={styles.btnQuit} onPress={handleQuit}>
          <Text style={styles.btnQuitText}>Quit</Text>
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
    padding: 10,
    width: 100,
    backgroundColor: '#80AF81',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  btnQuit: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: '#FF7777',
    borderRadius: 10,
  },
  btnQuitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
