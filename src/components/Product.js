import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
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
          <Image style={styles.img} source={item.image} />
          <View style={styles.nameTxt}>

            <Text style={{color: colors.white}}>{item.name}</Text>

          </View>
          <View style={styles.productContainer}>
            <View>
              {this.state.fontLoaded
                ? <Text style={styles.descTxt}>
                    {item.desc}
                  </Text>
                : null}

              <View style={{flexDirection: 'row'}}>
                <Text style={styles.priceTxt}>
                  ${item.price}
                </Text>
                <Text style={styles.promoTxt}>
                  {item.promo}
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
        <View style={styles.renderContainer}>

          {this.renderSectionOne ()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View style={styles.renderContainer}>

          {this.renderSectionTwo ()}
        </View>
      );
    }
  }

  render () {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <TouchableOpacity
              style={[this.state.activeIndex == 0 ? styles.categories : null]}
              onPress={() => this.segmentClicked (0)}
              transparent
              active={this.state.activeIndex == 0}
            >
              <Text style={[{fontSize: 19, color: colors.white}]}>
                Dress
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              transparent
              style={{marginTop: 10}}
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
              transparent
              style={{marginTop: 10}}
              active={this.state.activeIndex == 1}
            >
              <Text
                style={[
                  {fontSize: 19},
                  this.state.activeIndex == 1 ? {} : {color: 'black'},
                ]}
              >
                Blazers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              transparent
              style={{marginTop: 10}}
              active={this.state.activeIndex == 1}
            >
              <Text
                style={[
                  {fontSize: 19},
                  this.state.activeIndex == 1 ? {} : {color: 'black'},
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

const styles = StyleSheet.create ({
  img: {
    flex: 1,
    alignSelf: 'stretch',
    height: 260,
    width: 200,
    borderRadius: 10,
  },
  nameTxt: {
    position: 'absolute',
    transform: [{rotate: '270deg'}],
    backgroundColor: colors.black,
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
    left: -14,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  promoTxt: {
    color: colors.red,
    fontSize: 18,
    fontWeight: 'bold',
  },
  descTxt: {
    fontFamily: 'play-fair',
    fontSize: 22,
    color: 'gray',
  },
  renderContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categories: {
    backgroundColor: colors.black,
    borderRadius: 8,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
