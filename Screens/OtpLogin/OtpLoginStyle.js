import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const OtpLoginStyle = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  bgImg: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleImg: {
    marginTop: 30,
  },
  loginContainer: {
    alignItems: 'center',
    flex: 1,
    width: screenWidth,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    elevation: 5,
    position: 'relative',
    top: -5,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  wlcmText: {color: '#0D0A19', fontSize: 28, fontWeight: '700'},
  detailsText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 30,
  },
  loginOtpText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginTop: 20,
  },
});
export default OtpLoginStyle;
