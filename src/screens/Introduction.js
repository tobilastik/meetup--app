import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Wrapper from '../components/Wrapper';

export default class Login extends Component {
  render () {
    return (
      <Wrapper>
        <View>
          <View>
            <Image source={require ('../assets/logo.png')} />
          </View>
          <View>
            <Text>
              Connect with your business partners and associates using the new platform
            </Text>
          </View>

          <View>
            <TouchableOpacity>
              <Text>Skip Introduction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    );
  }
}
