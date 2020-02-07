import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../utils/colos';

class Wrapper extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignContent: 'flex-start'}}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo1}
              source={require ('../assets/logo.png')}
            />
            <Text style={styles.logoTxt}> meet</Text>
            <Image style={styles.logo2} source={require ('../assets/up.png')} />
          </View>
          <Image
            style={styles.wrapperImg}
            source={require ('../assets/shape.png')}
          />
        </View>
        <View style={{alignContent: 'flex-start'}}>
          {this.props.children}

        </View>
        <View style={styles.copyrights}>
          <Text style={styles.copyrightsTxt}>copyright © meetup.</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Wrapper;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 12,
  },
  wrapperImg: {
    height: 290,
    width: 320,
    position: 'absolute',
    // bottom: -300,
    right: -140,
    top: -80,
  },
  logoWrapper: {
    flexDirection: 'row',
    marginVertical: 80,
    alignContent: 'center',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  logoTxt: {
    fontSize: 30,
    color: colors.primary,
  },
  logo2: {
    width: 35,
    height: 40,
    top: 8,
  },
  logo1: {
    width: 35,
    height: 30,
  },
  copyrights: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
  },
  copyrightsTxt: {
    color: colors.primary,
    fontSize: 18,
  },
});
