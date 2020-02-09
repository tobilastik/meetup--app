import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import RegisterWrapper from '../components/RegisterWrapper';
import {colors} from '../utils/colos';
import Gradient from '../components/Gradient';

const Introduction = props => {
  return (
    <ScrollView style={styles.container}>
      <RegisterWrapper>
        <View style={{padding: 20, top: 30}}>
          <View style={styles.imgWrapper}>
            <Image
              style={{width: 380, height: 250}}
              source={require ('../assets/onboarding.png')}
            />
          </View>
          <View>
            <Text style={styles.introTxt}>
              Connect with your business partners and associates using the new platform
            </Text>
          </View>

          <View>
            <Gradient onPress={() => props.navigation.navigate ('Home')}>
              <Text style={{fontSize: 22, color: 'white'}}>
                Skip Introduction
              </Text>

            </Gradient>
          </View>
        </View>

      </RegisterWrapper>
    </ScrollView>
  );
};

export default Introduction;

const styles = StyleSheet.create ({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  imgWrapper: {
    marginTop: 100,
    alignItems: 'center',
  },
  introTxt: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
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
