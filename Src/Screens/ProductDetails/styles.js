import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Constant/Dimension';
import {Colors} from '../../Constant/Colors';
export const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  root: {
    padding: wp('4%'),
  },
  icon: {
    color: Colors.Black,
    marginRight: wp('2%'),
  },
  price: {
    color: Colors.Black,
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  oldPrice: {
    color: Colors.Black,
    fontSize: hp('2%'),
    fontWeight: 'normal',
  },
  description: {
    color: Colors.Black,
    marginVertical: hp('2%'),
    lineHeight: hp('3%'),
    fontSize: hp('2.4%'),
  },
  fonty: {
    fontWeight: 'bold',
    color: Colors.Black,
    marginVertical: hp('2%'),
    fontSize: hp('2.2%'),
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.3%'),
    marginRight: hp('1.3%'),
  },
  star: {
    margin: wp('0.5%'),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: hp('1%'),
    backgroundColor: Colors.Light_Blue,
  },
  GreenText: {
    color: Colors.Green,
  },
});
