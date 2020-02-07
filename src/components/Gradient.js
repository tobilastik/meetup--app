import React from 'react';
import {Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default class Gradient extends React.Component {
  render () {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 60,
        }}
      >
        <LinearGradient
          colors={['#E73361', '#9A1675']}
          style={{
            padding: 15,
            borderRadius: 5,
            width: '100%',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {this.props.children}
        </LinearGradient>
      </View>
    );
  }
}
