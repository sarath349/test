import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../Common/Header';
import LiveAuctionCard from './LiveAuctionCard';

const LiveAuction = () => {
  const [onPress, setOnPress] = useState(true);
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setOnPress(true)}
          style={{
            backgroundColor: onPress ? '#FFC527' : '#ffffff',
            padding: 10,
            borderRadius: 5,
            paddingHorizontal: 40,
          }}>
          <Text style={{color: '#000000', fontWeight: '700'}}>
            Live Inventory
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: !onPress ? '#FFC527' : '#ffffff',
            padding: 10,
            borderRadius: 5,
            paddingHorizontal: 40,
          }}
          onPress={() => setOnPress(false)}>
          <Text style={{color: '#000000', fontWeight: '700'}}>Completed</Text>
        </TouchableOpacity>
      </View>
      <LiveAuctionCard onPress={onPress} />
    </View>
  );
};

export default LiveAuction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: 52,
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
