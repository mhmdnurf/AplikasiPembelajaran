import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Menu({navigation}: {navigation: any}) {
  return (
    <>
      <ImageBackground
        source={require('../assets/img/main_screen/main_2.jpg')}
        style={styles.imageContainer}
        resizeMode="stretch">
        <Pressable
          style={styles.backBtnContainer}
          onPress={() => navigation.navigate('Home')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnPetunjuk}
          onPress={() => {
            navigation.navigate('Petunjuk');
          }}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnProfil}
          onPress={() => navigation.navigate('Profil')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnCapaian}
          onPress={() => navigation.navigate('Capaian')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnMateri}
          onPress={() => navigation.navigate('MenuMateri')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={styles.btnLatihan}
          onPress={() => navigation.navigate('Latihan')}>
          <Text>.</Text>
        </Pressable>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    bottom: height * 0.04,
    left: width * 0.0975,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  imgButton: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    flex: 1,
    width: width,
    height: height,
  },
  btnPetunjuk: {
    position: 'absolute',
    top: height * 0.5,
    left: width * 0.09,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  btnProfil: {
    position: 'absolute',
    top: height * 0.5,
    left: width * 0.209,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  btnCapaian: {
    position: 'absolute',
    top: height * 0.5,
    left: width * 0.325,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  btnMateri: {
    position: 'absolute',
    top: height * 0.5,
    left: width * 0.445,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  btnLatihan: {
    position: 'absolute',
    top: height * 0.5,
    left: width * 0.565,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
