import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import {colors} from '../utils/colos';
import Gradient from '../components/Gradient';

export default class Login extends Component {
  render () {
    return (
      <Wrapper>
        <View>
          <Text style={styles.helloTxt}>Hello!</Text>
          <View style={styles.txtContainer}>
            <Text style={styles.pageTxt}>please enter your</Text>
            <Text style={styles.pageTxt}>details to sign in </Text>

          </View>
          <View style={{marginHorizontal: 30, marginVertical: 19}}>
            <Text style={styles.loginTxt}>Phone Number</Text>
            <TextInput style={styles.inputContainer} />

            <Text style={styles.loginTxt}>Pin</Text>
            <TextInput style={styles.inputContainer} />

            <TouchableOpacity>
              <Text style={styles.forgotPin}>forgot your pin?</Text>
            </TouchableOpacity>

            <Gradient>
              <Text style={styles.signinTxt}>
                Sign in{' '}
              </Text>
            </Gradient>

            <View
              style={{
                marginTop: 90,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.accountTxt}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.signupTxt}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create ({
  helloTxt: {
    fontSize: 35,
    color: colors.primary,
    fontWeight: 'bold',
    padding: 30,
  },
  loginTxt: {
    fontSize: 21,
    color: colors.primary,
    marginTop: 6,
  },
  txtContainer: {
    padding: 12,
    margin: 12,
  },
  inputContainer: {
    height: 58,
    borderWidth: 1.2,
    borderColor: colors.primary,
    borderRadius: 6,
  },
  forgotPin: {
    color: colors.secondary,
    fontSize: 18,
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
    fontSize: 22,
  },
  signupTxt: {
    fontSize: 22,
    color: colors.secondary,
    marginHorizontal: 10,
  },
  pageTxt: {
    fontSize: 21,
    color: colors.primary,
  },
});
