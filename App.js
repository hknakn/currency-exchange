import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ExchangeScreen from './src/screens/ExchangeScreen';
import Header from './src/components/Header';
import configureStore from './src/redux/reducers/configureStore';
import {Provider} from 'react-redux';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.upperSafeAreaView} />
        <SafeAreaView
          forceInset={{top: 'always'}}
          style={styles.bottomSafeAreaView}>
          <StatusBar />
          <Header />
          <ExchangeScreen />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  upperSafeAreaView: {
    backgroundColor: '#E5E5E5',
  },
  bottomSafeAreaView: {
    flex: 1,
  },
});

export default App;
