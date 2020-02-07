import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Wrapper from '../components/Wrapper';

export default class Login extends Component {
  render () {
    return (
      <Wrapper>
        <View>
          <Text>Hello!</Text>
          <Text>
            You have successfully registered '\n' your account. You can now sign in
          </Text>

          <View>
            <Text>Phone Number</Text>
            <TextInput />

            <Text>Pin</Text>
            <TextInput />

            <View>
              <Text>forgot your pin?</Text>
            </View>

            <TouchableOpacity>
              <Text>Sign in</Text>
            </TouchableOpacity>

            <View>
              <Text>Don't have an account?</Text>
              <TouchableOpacity>
                <Text>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Wrapper>
    );
  }
}
