import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Orientation from 'react-native-orientation-locker';

const App = () => {
  useEffect(() => {
    Orientation.lockToLandscape();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Landscape Only</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
