import React from 'react';
import {useRef} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
export default function Pendahuluan({navigation}: {navigation: any}) {
  const videoRef = useRef<VideoRef>(null);
  const background = require('../assets/vid/pendahuluan.mp4');

  return (
    <>
      <Video
        resizeMode="stretch"
        source={background}
        ref={videoRef}
        onEnd={() => navigation.goBack()}
        style={styles.backgroundVideo}
      />
      <Pressable
        style={{
          position: 'absolute',
          padding: 10,
          left: 50,
          top: 10,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: 10,
        }}
        onPress={() => {
          videoRef.current?.pause();
          navigation.goBack();
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Skip
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
