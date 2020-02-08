import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {data} from '../utils/data';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../utils/colos';
import * as Font from 'expo-font';

class Product extends Component {
  constructor (props) {
    super (props);

    this.state = {
      activeIndex: 0,
      fontLoaded: false,
    };
  }

  async componentDidMount () {
    await Font.loadAsync ({
      'play-fair': require ('../assets/fonts/PlayfairDisplay-Regular.ttf'),
    });
    this.setState ({fontLoaded: true});
  }

  segmentClicked (index) {
    this.setState ({
      activeIndex: index,
    });
  }
  checkActive = index => {
    if (this.state.activeIndex !== index) {
      return {color: 'grey'};
    } else {
      return {};
    }
  };

  renderSectionOne () {
    return data.map (item => {
      return (
        <View style={{margin: 20}} key={item.id}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              height: 260,
              width: 200,
              borderRadius: 10,
            }}
            source={item.image}
          />
          <View
            style={{
              position: 'absolute',
              transform: [{rotate: '270deg'}],
              backgroundColor: colors.black,
              width: 60,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              top: 30,
              left: -14,
            }}
          >

            <Text style={{color: colors.white}}>{item.name}</Text>

          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              {this.state.fontLoaded
                ? <Text
                    style={{
                      fontFamily: 'play-fair',
                      fontSize: 22,
                      color: 'gray',
                    }}
                  >
                    {item.desc}
                  </Text>
                : null}

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: colors.primary,
                  }}
                >
                  ${item.price}
                </Text>
                <Text
                  style={{
                    color: colors.red,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                >
                  {' '}{item.promo}{' '}
                </Text>
              </View>
            </View>
            <Ionicons name="md-more" size={39} color="gray" />
          </View>

        </View>
      );
    });
  }

  renderSectionTwo () {
    return data.map (item => {
      return (
        <View key={item.id}>
          <Image
            style={{
              flex: 1,
              margin: 20,
            }}
            source={item.image}
          />

        </View>
      );
    });
  }

  renderSection () {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

          {this.renderSectionOne ()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

          {this.renderSectionTwo ()}
        </View>
      );
    }
  }

  render () {
    return (
      <ScrollView style={{}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <TouchableOpacity
              style={[
                this.state.activeIndex == 0
                  ? {
                      backgroundColor: colors.black,
                      borderRadius: 8,
                      width: 100,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
                  : null,
              ]}
              onPress={() => this.segmentClicked (0)}
              transparent
              active={this.state.activeIndex == 0}
            >
              <Text style={[{fontSize: 19, color: colors.white}]}>
                Dress
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.segmentClicked (1)}
              transparent
              active={this.state.activeIndex == 1}
            >
              <Text
                style={[
                  {fontSize: 19},
                  this.state.activeIndex == 1 ? {} : {color: 'black'},
                ]}
              >
                Pants
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.segmentClicked (1)}
              transparent
              active={this.state.activeIndex == 1}
            >
              <Text
                style={[
                  {fontSize: 19},
                  this.state.activeIndex == 1 ? {} : {color: 'grey'},
                ]}
              >
                Blazers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.segmentClicked (1)}
              transparent
              active={this.state.activeIndex == 1}
            >
              <Text
                style={[
                  {fontSize: 19},
                  this.state.activeIndex == 1 ? {} : {color: 'grey'},
                ]}
              >
                Jackets
              </Text>
            </TouchableOpacity>
          </View>
          {this.renderSection ()}
        </View>
      </ScrollView>
    );
  }
}
export default Product;
