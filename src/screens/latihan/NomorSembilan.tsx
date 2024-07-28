import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function SoalSembilan({navigation}: {navigation: any}) {
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
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            9. Umur ayah p tahun dan ayah itu 6 tahun lebih tua dari paman. Jika
            jumlah umur paman dan ayah 38 tahun, maka model matematika yang
            tepat adalah …
          </Text>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('a')}>
            <Text style={styles.optionText}>a. 2p + 6 = 38 </Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('b')}>
            <Text style={styles.optionText}>b. 2p – 6 = 38 </Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('c')}>
            <Text style={styles.optionText}>c. p + 6 = 38</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('d')}>
            <Text style={styles.optionText}>d. p – 6 = 38</Text>
          </Pressable>
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
  questionContainer: {
    backgroundColor: '#f4e1c1',
    padding: 20,
    marginHorizontal: width * 0.1,
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
