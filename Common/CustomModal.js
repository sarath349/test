import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const CustomModal = ({modalVisible, closeModal}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              alignItems: 'center',
              borderColor: '#E4E6E8',
            }}>
            <Text>33m:24s</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            <Text>Your Bid</Text>
            <Text>₹3,50,000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text>Bid increment </Text>
            <Text>₹5,000</Text>
          </View>
          <Text style={{alignSelf: 'center', marginTop: 20}}>
            Enter your Maximum bid amount{' '}
          </Text>
          <View
            style={{
              borderWidth: 1,
              padding: 15,
              marginHorizontal: 30,
              borderRadius: 10,
              alignItems: 'center',
              borderColor: '#E4E6E8',
              marginTop: 20,
            }}>
            <Text>₹4,00,000</Text>
          </View>
          <CustomButton buttonName="Set Auto Bid" bgColor="#F7B40D" />
          <Text>
            System will keep placing bid on your behalf till your maximum limit.
            This auto bid ia legally binding for you.
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    height: '50%',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    position: 'absolute',
    bottom: 0,
  },
});
