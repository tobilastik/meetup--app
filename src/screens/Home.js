import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Select from '../components/Select';
import Product from '../components/Product';

const Home = () => {
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Select />
      <View style={{top: 60}}>
        <Product />
      </View>
      <View style={{height: 120}} />
    </ScrollView>
  );
};

export default Home;
