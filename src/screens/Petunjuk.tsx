import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

export default function Petunjuk({navigation}: {navigation: any}) {
  const {width, height} = useWindowDimensions(); // Use useWindowDimensions hook

  return (
    <>
      <ImageBackground
        source={require('../assets/img/main_screen/main_3.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="stretch">
        <Pressable
          style={[
            styles.backBtnContainer,
            {
              left: width * 0.04, // Dynamically set left position
              bottom: height * 0.02, // Dynamically set bottom position
            },
          ]}
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
});
