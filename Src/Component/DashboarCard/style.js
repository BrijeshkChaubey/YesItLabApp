import {StyleSheet} from 'react-native'
import { hp, wp } from '../../Constant/Dimension';
import { Colors } from '../../Constant/Colors';
export const styles = StyleSheet.create({
    card: {
      paddingLeft: 10,
      backgroundColor: Colors.White,
      height: hp('18%'),
      borderRadius: wp('4%'),
      width: wp('50%'),
      marginVertical: hp('4%'),
    },
  
    imageView: {
      flex: 2,
      width: wp('30%'), 
      height: hp('15%'),
    },
    title: {
      color:Colors.Black,
      fontWeight:'bold',
      marginTop: hp('1%'),
      marginBottom: hp('1%'),
    },
    rating: {
      marginTop: hp('2%'),
      alignSelf: 'flex-start',
      marginLeft: wp('3%'),
    },
    star: {
      color: '#FF8C00'
    },
    View2: {
      height: 110,
      width: wp('100%'),
      marginVertical: wp('4%'),
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: Colors.White
    },
    View1:
    {
      display: 'flex',
      flexDirection: 'row'
    },
    root: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
    },
    image: {
      flex: 2,
      height: hp('30%'),
      
    },
    ratingText:{
        width:wp('8%'),
        color:Colors.grey
    },
    rightContainer: {
      padding: wp('2%'),
      flex: 3,
    },
  
    price: {
      color:Colors.Green,
  
      fontSize:hp('2%') ,
      fontWeight: 'bold',
    },
    oldPrice: {
      color:Colors.Black,
  
      fontSize: hp('3%'),
      fontWeight: 'normal',
      textDecorationLine: 'line-through',
    },
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: hp('1%'),
      marginRight:wp('5%')
    },
    star: {
      margin: 2,
    },
    Cartimage:{
       marginLeft:wp('13%'),
       height: hp('4%'), 
       width: wp('7s%'), }
  });