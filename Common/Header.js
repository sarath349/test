import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
const Header = props => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.innerContainer}> */}
      <View style={{backgroundColor: '#E4E6E8', padding: 10, borderRadius: 10}}>
        <Icon name="menu" size={20} />
      </View>
      <View style={{backgroundColor: '#E4E6E8', padding: 10, borderRadius: 10}}>
        <Icon name="user" size={20} />
      </View>
      {/* </View> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 120,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
  },
  innerContainer: {},
});
