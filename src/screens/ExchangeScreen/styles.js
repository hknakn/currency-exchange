import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currencyCard: {
    marginTop: hp('5%'),
    alignSelf: 'center',
  },
  exchangeCard: {
    alignSelf: 'center',
  },
  exchangeButton: {
    backgroundColor: '#E5E5E5',
    marginTop: hp('5%'),
    width: wp('40%'),
    height: wp('10%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1%'),
    borderColor: '#A9AAB2',
    borderWidth: hp('0.05%'),
  },
  exchangeText: {
    fontSize: hp('1.8%'),
    color: '#A9AAB2',
  },
  rateContainer: {
    backgroundColor: '#E5E5E5',
    marginVertical: hp('4%'),
    width: wp('40%'),
    height: wp('10%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1%'),
    borderColor: '#A9AAB2',
    borderWidth: hp('0.05%'),
  },
  rateText: {
    fontSize: hp('1.8%'),
    color: '#A9AAB2',
  },
});
