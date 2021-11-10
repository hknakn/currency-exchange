import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Currency Exchange</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: wp('100%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#A9AAB2',
    borderBottomWidth: hp('0.05%'),
  },
  headerText: {
    fontSize: hp('3%'),
    color: '#A9AAB2',
  },
});
