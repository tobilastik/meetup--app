import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Chevron} from 'react-native-shapes';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';

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

export default class Select extends Component {
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
          <View style={{width: '85%', paddingHorizontal: 18}}>
            <RNPickerSelect
              placeholder={placeholder}
              items={dress}
              onValueChange={dressCategory => this.setState ({dressCategory})}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 20,
                  right: 18,
                },
              }}
              value="Casual Dress"
              useNativeAndroidPickerStyle={false}
              textInputProps={{
                fontSize: 22,
              }}
              Icon={() => {
                return <Chevron size={2} color="black" />;
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderColor: 'lightgray',
              borderWidth: 0.9,
              padding: 8,
            }}
          >
            <SimpleLineIcons name="equalizer" size={30} />
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
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 0.9,
    borderColor: 'lightgray',
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
