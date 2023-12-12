import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchBar = ({term, onChangeTerm, onChangeSubmit}) => {
  return (
    <View style={styles.searchBarContainer}>
      <Icon name="search" size={30} color="#ccc" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchTitle}
        placeholder="Search"
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onChangeSubmit}></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 50,
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  searchTitle: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});
