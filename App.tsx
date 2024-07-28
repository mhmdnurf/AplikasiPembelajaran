import React from 'react';
import Orientation from 'react-native-orientation-locker';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './src/screens/Menu';
import SoundPlayer from 'react-native-sound-player';
import {AppState, AppStateStatus} from 'react-native';
import Pendahuluan from './src/screens/Pendahuluan';
import Petunjuk from './src/screens/Petunjuk';
import Profil from './src/screens/Profil';
import Capaian from './src/screens/Capaian';
import MenuMateri from './src/screens/MenuMateri';
import Materi from './src/screens/Materi';
import Latihan from './src/screens/Latihan';
import SoalSatu from './src/screens/latihan/NomorSatu';
import SoalDua from './src/screens/latihan/NomorDua';
import SoalTiga from './src/screens/latihan/NomorTiga';
import SoalEmpat from './src/screens/latihan/NomorEmpat';
import SoalLima from './src/screens/latihan/NomorLima';
import SoalEnam from './src/screens/latihan/NomorEnam';
import SoalTujuh from './src/screens/latihan/NomorTujuh';
import SoalDelapan from './src/screens/latihan/NomorDelapan';
import SoalSembilan from './src/screens/latihan/NomorSembilan';
import SoalSepuluh from './src/screens/latihan/NomorSepuluh';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    // Lock orientation to landscape
    Orientation.lockToLandscape();

    // Play the background music
    try {
      SoundPlayer.loadAsset(require('./src/assets/bg_music.mp3'));
      SoundPlayer.play();
      SoundPlayer.setVolume(0.25);
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
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Petunjuk"
          component={Petunjuk}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Capaian"
          component={Capaian}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MenuMateri"
          component={MenuMateri}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pendahuluan"
          component={Pendahuluan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Materi"
          component={Materi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Latihan"
          component={Latihan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalSatu"
          component={SoalSatu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalDua"
          component={SoalDua}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalTiga"
          component={SoalTiga}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalEmpat"
          component={SoalEmpat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalLima"
          component={SoalLima}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalEnam"
          component={SoalEnam}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalTujuh"
          component={SoalTujuh}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalDelapan"
          component={SoalDelapan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalSembilan"
          component={SoalSembilan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SoalSepuluh"
          component={SoalSepuluh}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
