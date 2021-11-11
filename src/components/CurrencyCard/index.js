import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

import CurrencyModal from '../CurrencyModal';
import {styles} from './styles';

const CurrencyCard = props => {
  const {
    style,
    balance,
    currency,
    setCurrencyInputValue,
    currencyInputValue,
    setExchangeInputValue,
    exchangeInputValue,
    isExchangeCard,
  } = props;
  const [modalVisible, setModalVisible] = useState(false);
  let inputValue;

  if (isExchangeCard) {
    inputValue =
      exchangeInputValue === 0 ? null : exchangeInputValue.toString();
  } else {
    inputValue =
      currencyInputValue === 0 ? null : currencyInputValue.toString();
  }

  const onChangeText = value => {
    if (value > balance) {
      Alert.alert('Error!', 'You can not exchange more than your balance');
      return;
    }

    if (isExchangeCard) {
      setExchangeInputValue(Number(value));
    } else {
      setCurrencyInputValue(Number(value));
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.innerContainer}>
        <View>
          <TouchableOpacity
            style={styles.selector}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.currencyText}>{currency}</Text>
            <View style={styles.selectIcon}>
              <Text>{'↓'}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.balanceText}>
            Balance:{' '}
            {balance.length < 32
              ? balance
              : balance.toString().substring(0, 8) + ' ' + currency}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.minusText}>{isExchangeCard ? '+' : '-'}</Text>
          <TextInput
            textAlign="center"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="0"
            value={inputValue}
            autoFocus={true}
          />
        </View>
      </View>
      <CurrencyModal
        isExchangeCard={isExchangeCard}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default CurrencyCard;
