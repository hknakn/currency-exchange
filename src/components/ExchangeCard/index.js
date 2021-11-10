import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CurrencyModal from '../CurrencyModal';

const ExchangeCard = props => {
  const {style, balance, currency} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState(balance);

  const onChangeText = value => {
    if (value > balance) {
      Alert.alert('Error!', 'You can not exchange more than your balance');
      setInputValue(0);
    } else {
      setInputValue(value);
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
            Balance: {balance + ' ' + currency}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.minusText}>{'-'}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={onChangeText}
            value={inputValue}
          />
        </View>
      </View>
      <CurrencyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default ExchangeCard;

const styles = StyleSheet.create({
  container: {
    marginTop: hp('2%'),
    width: wp('80%'),
    height: hp('10%'),
    backgroundColor: '#E5E5E5',
    borderRadius: hp('2%'),
    borderColor: '#A9AAB2',
    borderWidth: hp('0.05%'),
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('1.5%'),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selector: {
    flexDirection: 'row',
    width: wp('20%'),
    height: hp('4%'),
    backgroundColor: 'white',
    borderRadius: hp('5%'),
    borderColor: '#A9AAB2',
    borderWidth: hp('0.05%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: hp('2%'),
    color: 'black',
  },
  selectIcon: {
    marginLeft: wp('2.5%'),
  },
  balanceText: {
    fontSize: hp('1.6%'),
    color: '#A9AAB2',
    marginTop: hp('1%'),
    marginLeft: wp('1.5%'),
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  minusText: {
    fontSize: hp('2%'),
    color: '#A9AAB2',
    marginRight: wp('3%'),
  },
  input: {
    height: wp('10%'),
    width: wp('10%'),
    marginRight: wp('4%'),
    paddingHorizontal: wp('1.5%'),
    paddingVertical: hp('1%'),
    borderBottomWidth: 2,
    borderBottomColor: '#A9AAB2',
  },
});
