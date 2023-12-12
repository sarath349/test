import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({buttonName, bgColor, onPress}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text
          style={[
            styles.buttonText,
            buttonName === 'Register' && styles.registerButtonText,
          ]}>
          {buttonName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: bgColor,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#9A9EA7',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  registerButtonText: {
    color: '#000000',
  },
});
