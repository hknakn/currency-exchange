import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: wp('80%'),
    height: hp('10%'),
    backgroundColor: '#E5E5E5',
    borderRadius: hp('1%'),
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
    borderRadius: hp('1%'),
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
    width: wp('20%'),
    marginRight: wp('4%'),
    paddingHorizontal: wp('1.5%'),
    paddingVertical: hp('1%'),
    borderBottomWidth: 2,
    borderBottomColor: '#A9AAB2',
    fontSize: hp('3%'),
    color: '#A9AAB2',
  },
});
