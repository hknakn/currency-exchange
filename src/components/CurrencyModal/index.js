import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import currencies from '../../constants/currencies';
import {useDispatch} from 'react-redux';
import {
  setExchangeCurrency,
  setSelectedCurrency,
} from '../../redux/actions/currencyActions';
import {styles} from './styles';

const CurrencyModal = props => {
  const {modalVisible, setModalVisible, isExchangeCard} = props;
  const dispatch = useDispatch();

  const onCurrencySelected = key => {
    setModalVisible(false);
    if (isExchangeCard) {
      dispatch(setExchangeCurrency(key));
    } else {
      dispatch(setSelectedCurrency(key));
    }
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
