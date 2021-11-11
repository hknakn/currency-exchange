import React, {useEffect, useState} from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import currencies from '../../constants/currencies';
import {getCurrencyRates} from '../../redux/actions/rateActions';
import {
  setAllCurrenciesAndAmount,
  setCurrencyAmount,
  setExchangeAmount,
} from '../../redux/actions/currencyActions';
import {
  getStoredData,
  isKeyExist,
  setStoredData,
} from '../../utils/AsyncStorageUtils';
import CurrencyCard from '../../components/CurrencyCard';
import {styles} from './styles';

const ExchangeScreen = () => {
  const [rate, setRate] = useState(0);
  const [currencyInputValue, setCurrencyInputValue] = useState(0);
  const [exchangeInputValue, setExchangeInputValue] = useState(0);
  const {
    selectedCurrency,
    exchangeCurrency,
    selectedCurrencyAmount,
    exchangeCurrencyAmount,
    currencies: currencyData,
  } = useSelector(state => state.currency);
  const rates = useSelector(state => state.rates);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const localCurrencyData = await isKeyExist('currency');
        if (!localCurrencyData) {
          console.log('burda');
          await setStoredData('currency', {USD: 100, EUR: 200, GBP: 300});
        }
        const storedData = await getStoredData('currency');
        dispatch(setAllCurrenciesAndAmount(storedData));

        dispatch(getCurrencyRates(currencies[selectedCurrency]));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    setRate(rates?.rates[currencies[exchangeCurrency]]);
  }, [rates]);

  useEffect(() => {
    dispatch(getCurrencyRates(currencies[selectedCurrency]));
  }, [selectedCurrency]);

  useEffect(() => {
    if (exchangeCurrency === selectedCurrency) {
      setRate(1);
      return;
    }

    setRate(rates?.rates[currencies[exchangeCurrency]]);
  }, [exchangeCurrency]);

  useEffect(() => {
    if (
      parseFloat(currencyInputValue * rate).toPrecision(12) ===
      parseFloat(exchangeInputValue).toPrecision(12)
    ) {
      return;
    }

    setExchangeInputValue(currencyInputValue * rate);
  }, [currencyInputValue]);

  useEffect(() => {
    if (
      parseFloat(currencyInputValue * rate).toPrecision(12) ===
      parseFloat(exchangeInputValue).toPrecision(12)
    ) {
      return;
    }

    setCurrencyInputValue(exchangeInputValue * (1 / rate));
  }, [exchangeInputValue]);

  const onExchangePress = async () => {
    if (exchangeCurrency === selectedCurrency) {
      Alert.alert(
        'Same Currencies',
        'You cannot exchange same two currencies. Select different currencies.',
      );
      return;
    }

    const remainingSelectedCurrency =
      selectedCurrencyAmount - currencyInputValue;
    const remainingExchangeCurrency =
      exchangeCurrencyAmount + rate * exchangeInputValue;

    dispatch(setCurrencyAmount(remainingSelectedCurrency));
    dispatch(setExchangeAmount(remainingExchangeCurrency));

    await setStoredData('currency', {
      ...currencyData,
      [selectedCurrency]: remainingSelectedCurrency,
      [exchangeCurrency]: remainingExchangeCurrency,
    });

    setCurrencyInputValue(0);
    setExchangeInputValue(0);

    Alert.alert('Success!', 'Currency exchange made successfully.');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <CurrencyCard
          isExchangeCard={false}
          style={styles.currencyCard}
          balance={selectedCurrencyAmount}
          currency={currencies[selectedCurrency]}
          setCurrencyInputValue={setCurrencyInputValue}
          currencyInputValue={currencyInputValue}
        />
        <View style={styles.rateContainer}>
          <Text style={styles.rateText}>{'RATE: ' + rate}</Text>
        </View>
        <CurrencyCard
          isExchangeCard={true}
          style={styles.exchangeCard}
          balance={exchangeCurrencyAmount}
          currency={currencies[exchangeCurrency]}
          setExchangeInputValue={setExchangeInputValue}
          exchangeInputValue={exchangeInputValue}
        />
        <TouchableOpacity
          disabled={currencyInputValue === 0 || exchangeInputValue === 0}
          style={styles.exchangeButton}
          onPress={onExchangePress}>
          <Text style={styles.exchangeText}>EXCHANGE</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ExchangeScreen;
