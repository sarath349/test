import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import OtpLoginStyle from './OtpLoginStyle';
import Images from '../../assets/images';
import CustomInput from '../../Common/customInput';
import CustomButton from '../../Common/CustomButton';
import {useNavigation} from '@react-navigation/native';

const OtpLogin = () => {
  const [userId, setUserId] = useState('');
  const nav = useNavigation();
  return (
    <View style={OtpLoginStyle.container}>
      <ImageBackground
        source={Images.bgImage}
        style={OtpLoginStyle.bgImg}
        resizeMode="stretch">
        <Image source={Images.logo} />
        <Image source={Images.vehicle} style={OtpLoginStyle.vehicleImg} />
      </ImageBackground>
      <View style={OtpLoginStyle.loginContainer}>
        <CustomInput
          placeholder="Dealer ID/ Mobile number"
          value={userId}
          onChangeText={setUserId}
          marginBottom={20}
          icon
        />
        <CustomButton buttonName="Get OTP" bgColor="#F7B40D" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => nav.navigate('Login')}>
            <Text style={OtpLoginStyle.loginOtpText}>Log in with USER ID</Text>
          </TouchableOpacity>
          <Text style={[OtpLoginStyle.loginOtpText, {marginHorizontal: 5}]}>
            {' '}
            |
          </Text>
          <TouchableOpacity>
            <Text style={OtpLoginStyle.loginOtpText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginHorizontal: 30,
            textAlign: 'justify',
            marginTop: 20,
            fontSize: 10,
            color: '#000000',
            fontWeight: '400',
          }}>
          Cash deposit is not allowed against any form of Transaction such as
          Security deposit /Advance Fee/NOC Hold. Any Cash deposited by a buyer
          is non refundable.
        </Text>
      </View>
    </View>
  );
};

export default OtpLogin;

const styles = StyleSheet.create({});
