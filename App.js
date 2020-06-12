import React from 'react';
import { StyleSheet, Text, View, 
  FlatList, Image, ActivityIndicator} from 'react-native';
import {Card, CardItem} from 'native-base';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
