import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text} from 'react-native';
export default function Menu({navigation}: {navigation: any}) {
  return (
    <>
      <ImageBackground
        source={require('../assets/menu.jpeg')}
        style={styles.imageContainer}>
        <Pressable
          style={styles.backBtnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.backBtnText}>{'<'}</Text>
        </Pressable>
        <Pressable
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            padding: 10,
            backgroundColor: 'green',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('Materi');
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: '900',
              fontSize: 20,
            }}>
            Lihat Materi
          </Text>
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
    left: 10,
    bottom: 10,
    padding: 10,
    backgroundColor: '#FF7777',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
});
