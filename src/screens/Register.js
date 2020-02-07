import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Wrapper from '../components/Wrapper';

export default class Login extends Component {
  render () {
    return (
      <Wrapper>
        <View>
          <Text>Register</Text>
          <View>
            <Text>Full Names</Text>
            <TextInput />

            <Text>Phone Number</Text>
            <TextInput />

            <Text>Pin</Text>
            <TextInput />

            <Text>Repeat Pin</Text>
            <TextInput />
            <View>
              <Text>I agree to the terms & conditions</Text>
            </View>

            <TouchableOpacity>
              <Text>Register</Text>
            </TouchableOpacity>

            <View>
              <Text>Already have an account?</Text>
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
