import React from 'react';
import Orientation from 'react-native-orientation-locker';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import Materi from './src/screens/Materi';
import Menu from './src/screens/Menu';
import SoundPlayer from 'react-native-sound-player';
import {AppState, AppStateStatus} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    // Lock orientation to landscape
    Orientation.lockToLandscape();

    // Play the background music
    try {
      SoundPlayer.loadAsset(require('./src/assets/bg_music.mp3'));
      SoundPlayer.play();
    } catch (error) {
      console.log('Cannot play the sound file', error);
    }

    // Handle app state changes
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        SoundPlayer.resume();
      } else {
        SoundPlayer.pause();
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    // Cleanup on unmount
    return () => {
      // Unlock all orientations
      Orientation.unlockAllOrientations();

      // Remove app state listener
      // AppState.removeEventListener('change', handleAppStateChange);

      // Stop the music
      SoundPlayer.stop();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Materi"
          component={Materi}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
