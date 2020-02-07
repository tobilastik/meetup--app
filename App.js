import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Wrapper from './src/components/Wrapper';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Introduction from './src/screens/Introduction';

export default function App () {
  return (
    <View style={styles.container}>

      <Introduction />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
