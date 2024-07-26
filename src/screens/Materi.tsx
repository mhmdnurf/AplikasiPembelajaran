import React from 'react';
import {useRef} from 'react';
import {StyleSheet} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
export default function Materi() {
  const videoRef = useRef<VideoRef>(null);
  const background = require('../assets/video.mp4');

  return (
    <>
      <Video
        source={background}
        ref={videoRef}
        // onBuffer={onBuffer}
        // onError={onError}
        style={styles.backgroundVideo}
      />
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
