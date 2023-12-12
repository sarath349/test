import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  marginBottom,
  icon,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 25,
        borderRadius: 10,
        marginBottom: marginBottom,
      }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{flex: 1}}
      />
      {icon && <Icon name="mail" size={25} />}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
