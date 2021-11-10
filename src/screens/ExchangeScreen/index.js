import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ExchangeCard from '../../components/ExchangeCard';
import currencies from '../../constants/currencies';
import {getCurrencyRates} from '../../redux/actions/rateActions';
import {setAllCurrenciesAndAmount} from '../../redux/actions/currencyActions';
import {getStoredData, setStoredData} from '../../utils/AsyncStorageUtils';

const ExchangeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        // await removeStoredData('currency');
        // await setStoredData('currency', {USD: 100, EUR: 200, GBP: 300});
        const storedData = await getStoredData('currency');
        console.log({storedData});
        dispatch(setAllCurrenciesAndAmount(storedData));

        dispatch(getCurrencyRates());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const {selectedCurrency, amount} = useSelector(state => state.currency);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ExchangeCard
          style={styles.card}
          balance={amount}
          currency={currencies[selectedCurrency]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    alignSelf: 'center',
  },
});

export default ExchangeScreen;
