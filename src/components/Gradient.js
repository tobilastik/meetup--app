import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default class Gradient extends React.Component {
  render () {
    const {children, ...props} = this.props;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 60,
        }}
        {...props}
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
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
