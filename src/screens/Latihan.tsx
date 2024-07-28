import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Latihan({navigation}: {navigation: any}) {
  const handlePress = (number: number) => {
    switch (number) {
      case 1:
        navigation.navigate('SoalSatu');
        break;
      case 2:
        navigation.navigate('SoalDua');
        break;
      case 3:
        navigation.navigate('SoalTiga');
        break;
      case 4:
        navigation.navigate('SoalEmpat');
        break;
      case 5:
        navigation.navigate('SoalLima');
        break;
      case 6:
        navigation.navigate('SoalEnam');
        break;
      case 7:
        navigation.navigate('SoalTujuh');
        break;
      case 8:
        navigation.navigate('SoalDelapan');
        break;
      case 9:
        navigation.navigate('SoalSembilan');
        break;
      case 10:
        navigation.navigate('SoalSepuluh');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/img/latihan_soal.png')}
        style={styles.imageContainer}
        resizeMode="stretch">
        <Pressable
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            padding: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 10,
          }}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Kembali
          </Text>
        </Pressable>
        <View style={styles.cardsContainer}>
          {Array.from({length: 10}, (_, index) => (
            <Pressable
              key={index}
              style={styles.card}
              onPress={() => handlePress(index + 1)}>
              <Text style={styles.cardText}>{index + 1}</Text>
            </Pressable>
          ))}
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: height * 0.1,
  },
  card: {
    width: 100,
    height: 100,
    margin: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(244,225,193, 0.5)',
    borderRadius: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
