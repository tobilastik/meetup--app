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
import axios from 'axios';
import baseApi from '../utils/baseApi';

export default class Register extends Component {
  state = {
    showPin: true,
    showRetypePin: true,
    checked: true,
    email: '',
    pin: '',
    emailError: '',
    pinError: '',
    retypePin: '',
  };
  handleshowPin = () => {
    this.setState ({
      showPin: !this.state.showPin,
    });
  };

  handleShowRetypePin = () => {
    this.setState ({
      showRetypePin: !this.state.showRetypePin,
    });
  };

  handleRegister = async () => {
    const {pin, email, retypePin} = this.state;
    this.setState ({
      emailError: '',
      pinError: '',
    });
    //User validation
    if (email != '') {
      if (this.validateEmail (email)) {
        if (pin != '') {
          if (pin.length == 5) {
            if (pin === retypePin) {
              if (this.state.checked) {
                this.loginUsers ();
              } else {
                alert ('Agree to the terms and conditions');
              }
            } else {
              this.setState ({
                pinError: 'Pin must match!',
              });
            }
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
      .post (`${baseApi}/api/register`, {
        email: email,
        password: pin,
      })
      .then (({data}) => {
        console.log (data.id);
        AsyncStorage.setItem ('id', data.id);
        this.props.navigation.navigate ('Congratulations');
      })
      .catch (({response}) => {
        this.setState ({isLoading: false});
      });
  }

  render () {
    const {emailError, pinError} = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <RegisterWrapper>
          <View>
            <Text style={styles.helloTxt}>Register</Text>
            <View style={{marginHorizontal: 30, marginVertical: 19}}>
              <Text style={styles.loginTxt}>Full Names</Text>
              <TextInput style={styles.inputContainer} />

              <View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      styles.loginTxt,
                      emailError ? {color: 'red'} : null,
                    ]}
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
                  <Text
                    style={[styles.loginTxt, pinError ? {color: 'red'} : null]}
                  >
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

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[styles.loginTxt, pinError ? {color: 'red'} : null]}
                  >
                    Retype Pin
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
                    secureTextEntry={this.state.showRetypePin}
                    value={this.state.retypePin}
                    onChangeText={retypePin => this.setState ({retypePin})}
                  />

                  <TouchableOpacity onPress={this.handleShowRetypePin}>
                    {this.state.showRetypePin
                      ? <Feather name="eye" color="#000" size={25} />
                      : <Feather name="eye-off" color="#000" size={25} />}
                  </TouchableOpacity>
                </View>
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

              <Gradient onPress={this.handleRegister}>
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
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate ('Login')}
                >
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
