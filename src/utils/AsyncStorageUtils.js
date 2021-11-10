import AsyncStorage from '@react-native-async-storage/async-storage';

const setStoredData = async (key, value) => {
  try {
    const storedData = await getStoredData(key);
    const jsonValue = JSON.stringify({...storedData, ...value});

    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getStoredData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const removeStoredData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export {setStoredData, getStoredData, removeStoredData};
