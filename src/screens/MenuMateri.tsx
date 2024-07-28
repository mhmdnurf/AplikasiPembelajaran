import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

export default function MenuMateri({navigation}: {navigation: any}) {
  const {width, height} = useWindowDimensions(); // Use useWindowDimensions hook

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
          style={[
            styles.backBtnContainer,
            {
              left: width * 0.1, // Dynamically set left position
              bottom: height * 0.03, // Dynamically set bottom position
            },
          ]}
          onPress={() => navigation.goBack()}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btnPendahuluan,
            {
              top: height * 0.45, // Dynamically set top position
              left: width * 0.195, // Dynamically set left position
            },
          ]}
          onPress={() => navigation.navigate('Pendahuluan')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btnMateri,
            {
              top: height * 0.45, // Dynamically set top position
              left: width * 0.45, // Dynamically set left position
            },
          ]}
          onPress={() => navigation.navigate('Materi')}>
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btnLatihan,
            {
              top: height * 0.45, // Dynamically set top position
              left: width * 0.705, // Dynamically set left position
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
    padding: 10,
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  imgButton: {
    width: 10,
    height: 10,
  },
  btnPendahuluan: {
    position: 'absolute',
    padding: 10,
    // backgroundColor: 'rgba(255, 255, 0, 0.7)',
    width: 100,
    height: 100,
  },
  btnMateri: {
    position: 'absolute',
    padding: 10,
    width: 100,
    height: 100,
    // backgroundColor: 'rgba(255, 255, 0, 0.7)',
  },
  btnLatihan: {
    position: 'absolute',
    padding: 10,
    width: 115,
    height: 100,
    // backgroundColor: 'rgba(255, 255, 0, 0.7)',
  },
});
