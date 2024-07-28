import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
export default function Menu({navigation}: {navigation: any}) {
  return (
    <>
      <ImageBackground
        source={require('../assets/img/materi_2.jpg')}
        style={styles.imageContainer}>
        <Pressable
          style={styles.backBtnContainer}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/icons/back_icon.png')}
            style={styles.imgButton}
          />
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
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backBtnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
  },
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
  btnPetunjuk: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.85,
    left: Dimensions.get('window').width / 12,
    padding: 10,
    width: 150,
    height: 50,
    borderRadius: 100,
  },
  btnProfil: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.85,
    left: Dimensions.get('window').width / 5,
    padding: 10,
    width: 150,
    height: 50,
  },
  btnCapaian: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.85,
    left: Dimensions.get('window').width / 3.15,
    padding: 10,
    height: 50,
  },
  btnMateri: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.85,
    left: Dimensions.get('window').width / 2.175,
    padding: 10,
    // backgroundColor: '#1e91c7',
  },
});
