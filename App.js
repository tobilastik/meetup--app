import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Wrapper from './src/components/Wrapper';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Introduction from './src/screens/Introduction';
import Home from './src/screens/Home';

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
