import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons';
import * as Font from 'expo-font';
import {withNavigation} from 'react-navigation';

class Header extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount () {
    await Font.loadAsync ({
      poppins: require ('../assets/fonts/Poppins-SemiBold.ttf'),
    });
    this.setState ({fontLoaded: true});
  }

  handleLogout = () => {
    AsyncStorage.removeItem ('id');
    this.props.navigation.navigate ('Login');
  };
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
              <TouchableOpacity
                onPress={this.handleLogout}
                style={styles.iconList}
              >
                <Feather name="power" size={28} />
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation (Header);

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
