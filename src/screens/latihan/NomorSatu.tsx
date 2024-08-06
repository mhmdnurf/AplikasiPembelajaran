import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Modal,
} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function SoalSatu({navigation}: {navigation: any}) {
  const {width} = useWindowDimensions(); // Use useWindowDimensions hook
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [nilai, setNilai] = React.useState(0);

  const handleAnswerPress = (answer: string) => {
    const correctAnswer = 'c';
    if (answer === correctAnswer) {
      setIsCorrect(true);
      setNilai(10);
    } else {
      setIsCorrect(false);
      setNilai(0);
    }
    setModalVisible(true);
  };

  return (
    <>
      <ImageBackground
        source={require('../../assets/img/latihan_soal.png')}
        style={styles.imageContainer}
        resizeMode="stretch">
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Kembali</Text>
        </Pressable>
        <View
          style={[styles.questionContainer, {marginHorizontal: width * 0.1}]}>
          <Text style={styles.questionText}>
            1. Harga 1 buah buku sama dengan harga 3 buah pena. Cyndi hendak
            membeli 3 buku dan 3 pena dengan harga Rp. 48.000. Jika akhirnya
            Cyndi memutuskan hanya membeli 3 buku dan 1 pensil, maka harga
            seluruhnya adalah …
          </Text>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('a')}>
            <Text style={styles.optionText}>a. Rp. 48.000</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('b')}>
            <Text style={styles.optionText}>b. Rp. 58.000</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('c')}>
            <Text style={styles.optionText}>c. Rp. 40.000</Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => handleAnswerPress('d')}>
            <Text style={styles.optionText}>d. Rp. 42.000</Text>
          </Pressable>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FastImage
                source={
                  isCorrect
                    ? require('../../assets/gif/smile.gif')
                    : require('../../assets/gif/sad.gif')
                }
                style={styles.modalImage}
              />
              <Text style={styles.modalText}>
                {isCorrect
                  ? 'Selamat, jawaban Anda benar!'
                  : 'Maaf, jawaban Anda salah. Silakan coba lagi.'}
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.replace('SoalDua', {
                    totalNilai: nilai,
                  });
                }}>
                <Text style={styles.closeButtonText}>Tutup</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionContainer: {
    backgroundColor: '#f4e1c1',
    padding: 20,
    left: 30,
    maxHeight: '100%',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: '#f4e1c1',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nilaiText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
