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

export default function SoalSepuluh({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const {width} = useWindowDimensions();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalTotalNilai, setModalTotalNilai] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [nilai, setNilai] = React.useState(0);
  let totalNilai = route.params?.totalNilai;

  if (totalNilai == null) {
    totalNilai = 0;
  } else {
    totalNilai = route.params?.totalNilai;
  }

  const handleAnswerPress = (answer: string) => {
    const correctAnswer = 'b';
    if (answer === correctAnswer) {
      setIsCorrect(true);
      setNilai(totalNilai + 10);
    } else {
      setIsCorrect(false);
      setNilai(totalNilai);
    }
    setModalVisible(true);
    setModalTotalNilai(false);
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
            10. Suatu bus yang berisi 40 penumpang berangkat menuju tempat
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
                  setModalVisible(false);
                  if (totalNilai !== undefined) {
                    setModalTotalNilai(true);
                  } else {
                    navigation.goBack();
                  }
                }}>
                <Text style={styles.closeButtonText}>Tutup</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalTotalNilai}
          onRequestClose={() => {
            setModalTotalNilai(!modalTotalNilai);
          }}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FastImage
                source={require('../../assets/gif/celebrate.gif')}
                style={styles.modalImage}
              />
              <Text style={styles.modalText}>Benar: {nilai / 10}</Text>
              <Text style={styles.modalText}>Salah: {10 - nilai / 10}</Text>
              <Text style={styles.modalText}>
                Total Nilai Anda: {nilai} dari 100
              </Text>
              {nilai === 100 ? (
                <Text style={styles.modalText}>
                  Selamat, Anda mendapat nilai 100!
                </Text>
              ) : nilai >= 70 ? (
                <Text style={styles.modalText}>Bagus, terus tingkatkan!</Text>
              ) : (
                <Text style={styles.modalText}>Semangat, belajar lagi ya!</Text>
              )}
              <Pressable
                style={styles.closeButton}
                onPress={() => {
                  setModalTotalNilai(false);
                  navigation.goBack();
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
    borderRadius: 10,
    left: 30,
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
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
