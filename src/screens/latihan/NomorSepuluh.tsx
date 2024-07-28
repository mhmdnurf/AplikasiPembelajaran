import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
  useWindowDimensions,
} from 'react-native';

export default function SoalSepuluh({navigation}: {navigation: any}) {
  const {width} = useWindowDimensions(); // Use useWindowDimensions hook

  const handleAnswerPress = (answer: string) => {
    const correctAnswer = 'b';
    if (answer === correctAnswer) {
      Alert.alert('Correct', 'Jawaban Anda benar!');
    } else {
      Alert.alert('Incorrect', 'Jawaban Anda salah.');
    }
  };

  return (
    <>
      <ImageBackground
        source={require('../../assets/img/latihan_soal.png')}
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
        <View
          style={[styles.questionContainer, {marginHorizontal: width * 0.1}]}>
          <Text style={styles.questionText}>
            10. Suatu bus yang brisi 40 penumpang berangkat menuju tempat
            wisata. Sepulang dari tempat wisata, beberapa orang turun terlebih
            dahulu dan menyisakan 28 penumpang. Apabila p adalah banyak
            penumpang yang turun di tengah perjalanan pulang, kalimat matematika
            yang menyatakan keadaan tersebut adalah…
          </Text>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('a')}>
            <Text style={styles.optionText}>a. P – 28 = 40</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('b')}>
            <Text style={styles.optionText}>b. P + 28 = 40</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('c')}>
            <Text style={styles.optionText}>c. p – 40 = 28</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('d')}>
            <Text style={styles.optionText}>d. p + 40 = 28 </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    backgroundColor: '#f4e1c1',
    padding: 20,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
});
