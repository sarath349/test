import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Route from './Navigation/Route';
const App = () => {
  return (
    <View style={styles.container}>
      <Route />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
