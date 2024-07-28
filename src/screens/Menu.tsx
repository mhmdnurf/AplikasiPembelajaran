import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

export default function Menu({navigation}: {navigation: any}) {
  const {width, height} = useWindowDimensions(); // Use useWindowDimensions hook

  return (
    <>
      <ImageBackground
        source={require('../assets/img/main_screen/main_2.jpg')}
        style={styles.imageContainer}
        resizeMode="stretch">
        <Pressable
          style={[
            styles.backBtnContainer,
            {
              bottom: height * 0.04, // Dynamically set bottom position
              left: width * 0.0975, // Dynamically set left position
            },
          ]}
          onPress={() => navigation.navigate('Home')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            {
              top: height * 0.5, // Dynamically set top position
              left: width * 0.09, // Dynamically set left position
            },
          ]}
          onPress={() => navigation.navigate('Petunjuk')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            {
              top: height * 0.5, // Dynamically set top position
              left: width * 0.209, // Dynamically set left position
            },
          ]}
          onPress={() => navigation.navigate('Profil')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            {
              top: height * 0.5, // Dynamically set top position
              left: width * 0.325, // Dynamically set left position
            },
          ]}
          onPress={() => navigation.navigate('Capaian')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            {
              top: height * 0.5, // Dynamically set top position
              left: width * 0.445, // Dynamically set left position
            },
          ]}
          onPress={() => navigation.navigate('MenuMateri')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            {
              top: height * 0.5, // Dynamically set top position
              left: width * 0.565, // Dynamically set left position
            },
          ]}
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
    width: '100%',
    height: '100%',
  },
  btn: {
    position: 'absolute',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
