import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets/images';
import CustomInput from '../../Common/customInput';
import LoginStyle from './LoginStyles';
import CustomButton from '../../Common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {LoginApi} from '../Api/apiFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();
  const handleLogin = async () => {
    console.log('handleLogin function called');
    try {
      const response = await LoginApi(userId, password);
      const sessionToken = response.data.sessionToken;
      await AsyncStorage.setItem('sessionToken', sessionToken);
      console.log('Login successful:', response);
      nav.navigate('LiveAuction');
    } catch (error) {
      // Handle error
      console.error('Login error:', error);
    }
  };
  return (
    <View style={LoginStyle.container}>
      <ImageBackground
        source={Images.bgImage}
        style={LoginStyle.bgImg}
        resizeMode="stretch">
        <Image source={Images.logo} />
        <Image source={Images.vehicle} style={LoginStyle.vehicleImg} />
      </ImageBackground>
      <View style={LoginStyle.loginContainer}>
        <Text style={LoginStyle.wlcmText}>You’re Welcome</Text>
        <Text style={LoginStyle.detailsText}>Enter your details</Text>
        <CustomInput
          placeholder="Dealer ID/ Mobile number"
          value={userId}
          onChangeText={setUserId}
          marginBottom={20}
          icon
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <CustomButton
          buttonName="Log In"
          bgColor="#F7B40D"
          onPress={handleLogin}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => nav.navigate('OtpLogin')}>
            <Text style={LoginStyle.loginOtpText}>Log in with OTP</Text>
          </TouchableOpacity>
          <Text style={[LoginStyle.loginOtpText, {marginHorizontal: 5}]}>
            {' '}
            |
          </Text>
          <TouchableOpacity>
            <Text style={LoginStyle.loginOtpText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              borderWidth: 0.2,
              width: 60,
              height: 0,
              marginRight: 5,
            }}></View>
          <Text
            style={{
              marginRight: 5,
              fontSize: 14,
              fontWeight: '400',
              color: '#000000',
            }}>
            {' '}
            Or
          </Text>
          <View style={{borderWidth: 0.2, width: 60, height: 0}}></View>
        </View>
        <CustomButton buttonName="Register" bgColor="#fff" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
