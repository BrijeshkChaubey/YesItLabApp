import {StyleSheet} from 'react-native';
import { wp } from '../../Constant/Dimension';
export const styles = StyleSheet.create({
  root: {width: 400},
  image: {
    borderRadius: 8,
    margin:wp('6%'),
    height: 160,
    width: 600,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});