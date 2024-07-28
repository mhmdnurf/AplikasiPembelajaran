import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

export default function Materi({navigation}: {navigation: any}) {
  const [index, setIndex] = React.useState(0);
  const dataImage = [
    {id: 1, imageURL: require('../assets/img/materi/1.png')},
    {id: 2, imageURL: require('../assets/img/materi/2.png')},
    {id: 3, imageURL: require('../assets/img/materi/3.png')},
    {id: 4, imageURL: require('../assets/img/materi/4.png')},
    {id: 5, imageURL: require('../assets/img/materi/5.png')},
    {id: 6, imageURL: require('../assets/img/materi/6.png')},
    {id: 7, imageURL: require('../assets/img/materi/7.png')},
    {id: 8, imageURL: require('../assets/img/materi/8.png')},
    {id: 9, imageURL: require('../assets/img/materi/9.png')},
    {id: 10, imageURL: require('../assets/img/materi/10.png')},
    {id: 11, imageURL: require('../assets/img/materi/11.png')},
    {id: 12, imageURL: require('../assets/img/materi/12.png')},
    {id: 13, imageURL: require('../assets/img/materi/13.png')},
    {id: 14, imageURL: require('../assets/img/materi/14.png')},
    {id: 15, imageURL: require('../assets/img/materi/15.png')},
    {id: 16, imageURL: require('../assets/img/materi/16.png')},
    {id: 17, imageURL: require('../assets/img/materi/17.png')},
    {id: 18, imageURL: require('../assets/img/materi/18.png')},
    {id: 19, imageURL: require('../assets/img/materi/19.png')},
    {id: 20, imageURL: require('../assets/img/materi/20.png')},
    {id: 21, imageURL: require('../assets/img/materi/21.png')},
    {id: 22, imageURL: require('../assets/img/materi/22.png')},
    {id: 23, imageURL: require('../assets/img/materi/23.png')},
    {id: 24, imageURL: require('../assets/img/materi/24.png')},
  ];

  const handleNext = () => {
    if (index < dataImage.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <ImageBackground
        source={dataImage[index].imageURL}
        style={styles.imageContainer}
        resizeMode="stretch">
        <Pressable style={styles.btnBack} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Kembali</Text>
        </Pressable>
        <View style={styles.navigationContainer}>
          <Pressable
            style={styles.btnNavigation}
            onPress={handlePrevious}
            disabled={index === 0}>
            <Text style={styles.btnText}>Sebelumnya</Text>
          </Pressable>
          <Pressable
            style={styles.btnNavigation}
            onPress={handleNext}
            disabled={index === dataImage.length - 1}>
            <Text style={styles.btnText}>Selanjutnya</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  btnNavigation: {
    backgroundColor: '#eda440',
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnBack: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#282f1a',
    borderRadius: 10,
  },
});
