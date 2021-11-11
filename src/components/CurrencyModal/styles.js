import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
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
    borderRadius: hp('1%'),
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
    borderRadius: hp('1%'),
  },
  closeButtonText: {},
});
