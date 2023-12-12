import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import OtpLogin from '../Screens/OtpLogin/OtpLogin';
import Inventory from '../Screens/Inventory/Inventory';
import LiveAuction from '../InventoryList/LiveAuction';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OtpLogin" component={OtpLogin} />
        <Stack.Screen name="Inventory" component={Inventory} />
        <Stack.Screen name="LiveAuction" component={LiveAuction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
