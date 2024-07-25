import React from 'react';
import {Pressable, Text} from 'react-native';
export default function About({navigation}: {navigation: any}) {
  return (
    <>
      <Text>About</Text>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>Press me</Text>
      </Pressable>
    </>
  );
}
