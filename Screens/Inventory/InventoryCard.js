import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Images from '../../assets/images';
import CustomModal from '../../Common/CustomModal';
import {InventoryApi} from '../Api/apiFunctions';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const InventoryCard = () => {
  const [onPress, setOnPress] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const autoBid = () => {
    setOnPress(true);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await InventoryApi();
      const extractedData = response.data.map(entry => {
        const inventoryData = entry.inventory;
        const highestBid = entry.highestInventoryBid;

        const {auctionInventoryNo, registrationNumber, vehicleType} =
          inventoryData || {};

        const vehicleTypeName =
          vehicleType && vehicleType.name !== undefined
            ? vehicleType.name
            : 'N/A';

        const {amount, bidderName, bidderUsername, timestamp} =
          highestBid || {};

        const result = {
          auctionInventoryNo,
          registrationNumber,
          vehicleTypeName,
          highestBid: {
            amount,
            bidderName,
            bidderUsername,
            timestamp,
          },
        };

        console.log('Vehicle Type Name:', vehicleTypeName); // Log the name
        console.log('result', result); // Log the entire result object
        return result;
      });

      // Log all entries in the extractedData array
      console.log('All extracted data:', extractedData);
    } catch (error) {
      console.error(' error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        borderRadius={10}
        source={Images.car}
        style={styles.carImg}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              marginLeft: 10,
            }}>
            <Text
              style={{
                backgroundColor: '#fff',
                padding: 5,
                borderRadius: 5,
                fontWeight: '600',
                color: '#000000',
              }}>
              View Inspection Report
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              marginRight: 10,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 5,
            }}>
            <Image source={Images.eye} />
          </View>
        </View>
        <View style={styles.vehiDetContainer}>
          <Text>AP29BXXXXX</Text>
          <Image source={Images.point} />
          <Text>Petrol</Text>
          <Image source={Images.point} />
          <Text>2014</Text>
          <Text>34000km</Text>
        </View>
      </ImageBackground>
      <View style={{margin: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: '700', fontSize: 18}}>
            Maruti Suzuki Swift Dzire VDi
          </Text>
          <View style={{backgroundColor: '#000', padding: 5, borderRadius: 5}}>
            <Image source={Images.love} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Image source={Images.carIcon} />

          <Text>4 Wheeler</Text>
          <Image source={Images.point} />
          <Text>Bangalore</Text>
          <Text style={{textDecorationLine: 'underline'}}>Remark</Text>
          <Image source={Images.like} />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontWeight: '800', fontSize: 16}}>02:24:22</Text>
            <Text style={{fontWeight: '800', fontSize: 14}}>
              10 March, 9:38PM
            </Text>
            <Text>End time</Text>
          </View>
          <View>
            <Text style={{fontWeight: '800'}}>18</Text>
            <Text>Bids</Text>
          </View>
          <View>
            <Text style={{color: '#00A541'}}>Reserve Met</Text>
            <Text style={{textDecorationLine: 'underline'}}>Comments (5)</Text>
          </View>
        </View>
        <Text style={{marginTop: 10}}>
          Tip : Swift Dzire was approved @5 lakh in Previovs auctions
        </Text>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 52,
            margin: 10,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => autoBid()}
            style={{
              backgroundColor: onPress ? '#FFC527' : '#ffffff',
              padding: 10,
              borderRadius: 5,
              paddingHorizontal: 40,
              borderWidth: 1,
              borderColor: '#97979780',
            }}>
            <Text
              style={{
                color: onPress ? '#ffffff' : '#000000',
                fontWeight: '700',
              }}>
              Set Auto Bid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: !onPress ? '#FFC527' : '#ffffff',
              padding: 10,
              borderRadius: 5,
              paddingHorizontal: 40,
              borderWidth: 1,
              borderColor: '#97979780',
            }}
            onPress={() => setOnPress(false)}>
            <Text
              style={{
                color: '#000000',
                fontWeight: '700',
                color: onPress ? '#000000' : '#ffffff',
              }}>
              Place Bid
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#666666', fontWeight: '600'}}>
            Your Highest Bid - ₹3,40,000
          </Text>
          <Text style={{fontWeight: '400', color: '#0D0A19'}}>
            15/20 Bids Remaining
          </Text>
        </View>
      </View>
      <CustomModal modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
};

export default InventoryCard;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  carImg: {
    resizeMode: 'cover',
    width: '100%',
    height: screenHeight * 0.3,
    position: 'relative',
  },
  vehiDetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
