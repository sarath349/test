import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Common/Header';
import InventoryStyle from './InventoryStyle';
import InventoryCard from './InventoryCard';
import Images from '../../assets/images';

const Inventory = () => {
  const [onPress, setOnPress] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  //   const [onComplete, setOnComplete] = useState(false);
  const onClick = () => {
    setOnPressed(!onPressed);
    console.log('onPressed', onPressed);
  };
  return (
    <ScrollView style={InventoryStyle.container}>
      <Header />
      <View style={InventoryStyle.remBuyContainer}>
        <Text style={InventoryStyle.remText1}>Remaining Buying Limit</Text>
        <Text style={InventoryStyle.remText2}>₹82,00,000</Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          height: 52,
          margin: 20,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,
        }}>
        <Text style={{fontWeight: '700', fontSize: 15}}>
          Auction Name :
          <Text style={{fontWeight: '400'}}>
            Yes Bank 4W CV Online North (54321)
          </Text>
        </Text>
        <View style={{backgroundColor: '#000', padding: 5, borderRadius: 5}}>
          <Image source={Images.love} style={{height: 15, width: 15}} />
        </View>
      </View>
      <InventoryCard />
    </ScrollView>
  );
};

export default Inventory;

const styles = StyleSheet.create({});
