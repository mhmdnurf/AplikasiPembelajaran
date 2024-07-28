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

export default function SoalDua({navigation}: {navigation: any}) {
  const {width} = useWindowDimensions();
  const handleAnswerPress = (answer: string) => {
    const correctAnswer = 'a';
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
            2. Taman bunga bu Alda berbentuk persegi panjang dengan ukuran
            diagonalnya (3x + 15) meter dan (5x + 5) meter. Berapa panjang
            diagonal taman bunga tersebut…
          </Text>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('a')}>
            <Text style={styles.optionText}>a. 4 meter</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('b')}>
            <Text style={styles.optionText}>b. 5 meter</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('c')}>
            <Text style={styles.optionText}>c. 14 meter</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('d')}>
            <Text style={styles.optionText}>d. 15 meter</Text>
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
