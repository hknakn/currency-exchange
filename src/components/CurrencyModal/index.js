import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import currencies from '../../constants/currencies';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {setSelectedCurrency} from '../../redux/actions/currencyActions';

const CurrencyModal = props => {
  const {modalVisible, setModalVisible} = props;
  const dispatch = useDispatch();

  const onCurrencySelected = key => {
    setModalVisible(false);
    dispatch(setSelectedCurrency(key));
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.divider} />
        <View style={styles.currenciesContainer}>
          {Object.keys(currencies).map((key, index) => (
            <>
              <TouchableOpacity
                key={key}
                style={styles.currencyButton}
                onPress={() => {
                  onCurrencySelected(key);
                }}>
                <Text style={styles.currencyText}>{currencies[key]}</Text>
              </TouchableOpacity>
              {index !== Object.keys(currencies).length - 1 && (
                <View key={key} style={styles.currencyDivider} />
              )}
            </>
          ))}
        </View>
        <View />

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CurrencyModal;

const styles = StyleSheet.create({
  container: {
    height: hp('35%'),
    marginTop: 'auto',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingTop: hp('1.5%'),
  },
  divider: {
    backgroundColor: '#A9AAB2',
    height: hp('0.5%'),
    width: wp('25%'),
    borderRadius: hp('100%'),
    marginBottom: hp('1.5%'),
  },
  currenciesContainer: {
    marginTop: hp('2%'),
    width: wp('80%'),
    borderColor: '#A9AAB2',
    backgroundColor: '#fff',
    borderWidth: hp('0.05%'),
    borderRadius: hp('1.5%'),
  },
  currencyButton: {
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyDivider: {
    backgroundColor: '#A9AAB2',
    height: hp('0.1%'),
    width: wp('80%'),
  },
  closeButton: {
    marginTop: hp('4%'),
    height: hp('5%'),
    width: wp('30%'),
    marginVertical: wp('2%'),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: hp('0.05%'),
    borderColor: '#A9AAB2',
    borderRadius: hp('1.5%'),
  },
  closeButtonText: {},
});
