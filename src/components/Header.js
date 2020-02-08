import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons';
import * as Font from 'expo-font';
export default class Home extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount () {
    await Font.loadAsync ({
      poppins: require ('../assets/fonts/Poppins-SemiBold.ttf'),
    });
    this.setState ({fontLoaded: true});
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="md-menu" size={35} />
            </TouchableOpacity>
            <View style={{left: 20}}>
              {this.state.fontLoaded
                ? <Text
                    style={{
                      fontFamily: 'poppins',
                      fontSize: 30,
                    }}
                  >
                    Meetup
                  </Text>
                : null}

            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}
            >
              <View style={styles.iconList}>
                <Ionicons name="ios-search" size={30} />
              </View>
              <View style={styles.iconList}>
                <Ionicons name="ios-notifications-outline" size={34} />
              </View>
              <View style={styles.iconList}>
                <Feather name="shopping-bag" size={28} />
              </View>
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    marginVertical: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  meetup: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconList: {
    marginHorizontal: 8,
  },
});
