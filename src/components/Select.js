import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Feather, Ionicons} from '@expo/vector-icons';

const dress = [
  {
    label: 'Casual Dress',
    value: 'Casual Dress',
  },
  {
    label: 'Cooperate',
    value: 'Cooperate',
  },
  {
    label: 'Sports Wear',
    value: 'Sports Wear',
  },
];

export default class Home extends Component {
  state = {
    dressCategory: '',
  };

  render () {
    const placeholder = {
      label: 'Select category...',
      value: null,
      color: '#9EA0A4',
    };

    return (
      <View>
        <View style={{flexDirection: 'row', top: 20}}>
          <View style={{width: '90%', paddingHorizontal: 18}}>
            <RNPickerSelect
              placeholder={placeholder}
              items={dress}
              onValueChange={dressCategory => this.setState ({dressCategory})}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              value={this.state.dressCategory}
              useNativeAndroidPickerStyle={false}
              textInputProps={{underlineColor: 'yellow'}}
              Icon={() => {
                return <Feather name="arrow-down" size={24} color="gray" />;
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'whitesmoke',
              borderColor: 'gray',
              borderWidth: 0.2,
            }}
          >
            <Ionicons name="md-menu" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create ({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    borderBottomColor: 'gray',
    paddingVertical: 8,
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
