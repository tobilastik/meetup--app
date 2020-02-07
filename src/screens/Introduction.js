import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import {colors} from '../utils/colos';

export default class Login extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Wrapper>
          <View>
            <View style={styles.imgWrapper}>
              <Image
                style={{width: 380}}
                source={require ('../assets/onboarding.png')}
              />
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: colors.background,
  },
  imgWrapper: {
    marginTop: 100,
    alignItems: 'center',
  },
});
