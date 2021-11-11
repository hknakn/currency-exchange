import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Currency Exchange</Text>
    </View>
  );
};

export default Header;
