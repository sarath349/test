import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Images from '../assets/images';
import {useNavigation} from '@react-navigation/native';

const LiveAuctionCard = ({onPress}) => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.physConatiner}>
        <View style={styles.physView}>
          <Image
            source={Images.redDot}
            style={{height: 5, width: 5, marginRight: 5}}
          />
          <Text style={{color: '#FF0000'}}>Live</Text>
        </View>
        <Text style={styles.physText}>Physical Auction</Text>
        <Image source={Images.termsIcon} style={{height: 25, width: 25}} />
      </View>
      <Text style={styles.credServiceText}>
        TVS Credit Services Ltd 4W Auction UP1{' '}
      </Text>
      <Image
        source={Images.line}
        style={{alignSelf: 'center', marginTop: 10}}
      />
      <Image
        source={Images.vehicleType}
        style={{alignSelf: 'center', marginTop: 10}}
      />
      <Image
        source={Images.line}
        style={{alignSelf: 'center', marginTop: 10}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Image source={Images.twoIcon} />
        <Image source={Images.vertical} />
        <View>
          <Text style={styles.endAtText}>Ends at : 12-Jan-2023; 17:00</Text>
          <Text style={styles.endAtText}>Auction Type : Bank</Text>
          <Text style={styles.endAtText}>Auction ID : 39864</Text>
        </View>
      </View>
      <View style={styles.inButtonContainer}>
        <TouchableOpacity
          onPress={() => nav.navigate('Inventory')}
          style={styles.viewButton}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: '800',
              fontSize: 18,
            }}>
            View
          </Text>
        </TouchableOpacity>
        <Image source={Images.download} />
      </View>

      <TouchableOpacity style={styles.paytoRegButton}>
        <Text style={{color: '#ffffff', fontWeight: '800', fontSize: 18}}>
          Pay to Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LiveAuctionCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 16,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  physConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  physView: {flexDirection: 'row', alignItems: 'center'},
  physText: {backgroundColor: '#FFD3C5', padding: 2, borderRadius: 2},
  credServiceText: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    color: '#000000',
  },
  endAtText: {color: '#000000'},
  inButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  viewButton: {
    backgroundColor: '#FFC527',
    height: 46,
    alignItems: 'center',
    width: 243,
    justifyContent: 'center',
    borderRadius: 10,
  },
  paytoRegButton: {
    backgroundColor: '#09A541',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    width: '85%',
    paddingVertical: 12,
  },
});
