import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import Select from '../components/Select';
import Product from '../components/Product';

export default class Home extends Component {
  render () {
    return (
      <View>
        <Header />
        <Select />
        <View style={{top: 60}}>
          <Product />
        </View>
      </View>
    );
  }
}
