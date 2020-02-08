import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import {colors} from '../utils/colos';
import {Feather} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import baseApi from '../utils/baseApi';
import axios from 'axios';

export default class Login extends Component {
  constructor (props) {
    super (props);

    this.state = {
      showPin: true,
      email: '',
      pin: '',
      emailError: '',
      pinError: '',
    };
  }

  handleshowPin = () => {
    this.setState ({
      showPin: !this.state.showPin,
    });
  };

  handleLogin = async () => {
    const {pin, email} = this.state;
    this.setState ({
      emailError: '',
      pinError: '',
    });
    //User validation
    if (email != '') {
      if (this.validateEmail (email)) {
        if (pin != '') {
          if (pin.length == 5) {
            this.loginUsers ();
          } else {
            this.setState ({
              pinError: 'Pin length should be 5 characters!',
            });
          }
        } else {
          this.setState ({pinError: 'Pin required!!!'});
        }
      } else {
        this.setState ({emailError: 'Please enter a valid Email Address !'});
      }
    } else {
      this.setState ({emailError: 'Email Address is required !'});
    }
  };

  //Validate email with regex
  validateEmail (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test (String (email).toLowerCase ());
  }

  async loginUsers () {
    const {email, pin} = this.state;
    this.setState ({isLoading: true, emailError: '', pinError: ''});
    await axios
      .post (`${baseApi}/api/login`, {
        email: email,
        password: pin,
      })
      .then (({data}) => {
        console.log (data.id);
        AsyncStorage.setItem ('id', data.id);
        this.props.navigation.navigate ('Introduction');
      })
      .catch (({response}) => {
        this.setState ({isLoading: false});
      });
  }

  render () {
    const {emailError, pinError} = this.state;
    return (
      <Wrapper>
        <View>
          <Text style={styles.helloTxt}>Congratulations!</Text>
          <View style={styles.txtContainer}>
            <Text style={styles.pageTxt}>You have successfully registered</Text>
            <Text style={styles.pageTxt}>
              your account. You can now sign in{' '}
            </Text>

          </View>
          <View style={{marginHorizontal: 30, marginVertical: 19}}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[styles.loginTxt, emailError ? {color: 'red'} : null]}
              >
                Email
              </Text>
              {emailError != ''
                ? <View
                    style={{
                      position: 'absolute',
                      right: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: 'red',
                        marginTop: 30,
                      }}
                    >
                      {emailError}
                    </Text>
                  </View>
                : null}

            </View>

            <TextInput
              keyboardType={'email-address'}
              style={[
                styles.inputContainer,
                emailError ? {borderColor: 'red'} : null,
              ]}
              value={this.state.email}
              onChangeText={email => this.setState ({email})}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.loginTxt, pinError ? {color: 'red'} : null]}>
                Pin
              </Text>
              {pinError != ''
                ? <View
                    style={{
                      position: 'absolute',
                      right: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: 'red',
                        marginTop: 30,
                      }}
                    >
                      {pinError}
                    </Text>
                  </View>
                : null}
            </View>

            <View
              style={[
                styles.passwordContainer,
                pinError ? {borderColor: 'red'} : null,
              ]}
            >
              <TextInput
                style={[styles.inputStyle]}
                autoCorrect={false}
                secureTextEntry={this.state.showPin}
                value={this.state.pin}
                onChangeText={pin => this.setState ({pin})}
              />

              <TouchableOpacity onPress={this.handleshowPin}>
                {this.state.showPin
                  ? <Feather name="eye" color="#000" size={25} />
                  : <Feather name="eye-off" color="#000" size={25} />}
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPin}>forgot your pin?</Text>
            </TouchableOpacity>

            <View style={{height: 80}} />
            <TouchableOpacity
              style={{backgroundColor: 'red'}}
              onPress={this.handleLogin}
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
                <Text style={styles.signinTxt}>
                  Sign in{' '}
                </Text>
              </LinearGradient>

            </TouchableOpacity>

            <View
              style={{
                marginTop: 90,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.accountTxt}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate ('Register')}
              >
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
    fontSize: 22,
    color: colors.primary,
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
