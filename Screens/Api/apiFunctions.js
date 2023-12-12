import api from './api';
import Endpoints from '../../Common/Endpoints';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from the appropriate package
export const LoginApi = async (email, password) => {
  console.log('email,password', email, password);
  const endpoint = Endpoints.LoginUrl;
  const data = {
    email: String(email),
    password: String(password),
  };

  try {
    const response = await api.post(endpoint, data);
    return response;
  } catch (error) {
    // Handle error
    console.error('Login API error:', error);
    throw error;
  }
};
const getBearerToken = async () => {
  try {
    const token = await AsyncStorage.getItem('sessionToken');
    return token;
  } catch (error) {
    console.error('Error getting bearer token from AsyncStorage:', error);
    throw error;
  }
};

export const InventoryApi = async () => {
  const endpoint = Endpoints.Inventory;
  const data = {};
  try {
    const token = await getBearerToken();
    const response = await api.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    // Handle error
    console.error('Inventory API error:', error);
    throw error;
  }
};
