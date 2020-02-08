import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Select from '../components/Select';
import Product from '../components/Product';

export default class Home extends Component {
  render () {
    return (
      <View>
        <Header />
        <Select />
        <ScrollView style={{top: 60}}>
          <Product />
        </ScrollView>
      </View>
    );
  }
}
