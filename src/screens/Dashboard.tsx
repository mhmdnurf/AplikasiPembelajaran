import React from 'react';
import {Pressable, Text} from 'react-native';

export default function Dashboard({navigation}: {navigation: any}) {
  return (
    <>
      <Text>Dashboard</Text>
      <Pressable onPress={() => navigation.navigate('About')}>
        <Text>Press me</Text>
      </Pressable>
    </>
  );
}
