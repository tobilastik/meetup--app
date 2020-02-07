import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RegisterWrapper from '../components/RegisterWrapper';
import {colors} from '../utils/colos';
import Gradient from '../components/Gradient';
import {Feather} from '@expo/vector-icons';
import {CheckBox} from 'react-native-elements';

export default class Register extends Component {
  state = {
    showPassword: true,
    checked: true,
  };
  handleShowPassword = () => {
    this.setState ({
      showPassword: !this.state.showPassword,
    });
  };
  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <RegisterWrapper>
          <View>
            <Text style={styles.helloTxt}>Register</Text>
            <View style={{marginHorizontal: 30, marginVertical: 19}}>
              <Text style={styles.loginTxt}>Full Names</Text>
              <TextInput style={styles.inputContainer} />

              <Text style={styles.loginTxt}>Phone Number</Text>
              <TextInput style={styles.inputContainer} />

              <Text style={styles.loginTxt}>Pin</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.inputStyle}
                  autoCorrect={false}
                  secureTextEntry={this.state.showPassword}
                  onChangeText={this.onPasswordEntry}
                />
                <TouchableOpacity onPress={this.handleShowPassword}>
                  {this.state.showPassword
                    ? <Feather name="eye" color="#000" size={25} />
                    : <Feather name="eye-off" color="#000" size={25} />}
                </TouchableOpacity>
              </View>

              <Text style={styles.loginTxt}>Repeat Pin</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.inputStyle}
                  autoCorrect={false}
                  secureTextEntry={this.state.showPassword}
                  onChangeText={this.onPasswordEntry}
                />
                <TouchableOpacity onPress={this.handleShowPassword}>
                  {this.state.showPassword
                    ? <Feather name="eye" color="#000" size={25} />
                    : <Feather name="eye-off" color="#000" size={25} />}
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <CheckBox
                  title="I agree to the terms &  conditions"
                  checked={this.state.checked}
                  onPress={() => this.setState ({checked: !this.state.checked})}
                  checkedColor={colors.primary}
                  containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                />
              </TouchableOpacity>

              <Gradient>
                <Text style={styles.signinTxt}>
                  Register
                </Text>
              </Gradient>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.accountTxt}>Already have an account?</Text>
                <TouchableOpacity>
                  <Text style={styles.signupTxt}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RegisterWrapper>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  helloTxt: {
    fontSize: 35,
    color: colors.primary,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  loginTxt: {
    fontSize: 21,
    color: colors.primary,
    marginTop: 20,
  },
  txtContainer: {
    padding: 12,
    margin: 12,
  },
  inputContainer: {
    height: 58,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: 6,
    top: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
  },
  forgotPin: {
    color: colors.secondary,
    fontSize: 20.5,
    position: 'absolute',
    right: 0,
    margin: 6,
  },
  signinTxt: {
    backgroundColor: 'transparent',
    fontSize: 22,
    color: '#fff',
  },
  accountTxt: {
    fontSize: 20,
    color: colors.primary,
  },
  signupTxt: {
    fontSize: 20,
    color: colors.secondary,
    marginHorizontal: 10,
  },
  pageTxt: {
    fontSize: 21,
    color: colors.primary,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#000',
    paddingBottom: 10,
    height: 58,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: 6,
    top: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
  },
  inputStyle: {
    flex: 1,
  },
});
