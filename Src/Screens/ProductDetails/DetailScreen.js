import React, {useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
import { Carosalimagescreen } from '../../Component/CarosalImage/carolelimage';
import { Colors } from '../../Constant/Colors';
import { hp, wp } from '../../Constant/Dimension';
import { styles } from './styles';

export const ProdctDetailscreen = (...props) => {
  const navigation = useNavigation();
  const data = props[0].route.params.Data;
  const image = data.image;
  return (
    <View  style={styles.MainView}>
      <View>
        <Appbar.Header style={styles.header}>
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={28}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>

          <Appbar.Content title={data.title} style={{alignSelf: 'center'}} />
        </Appbar.Header>
      </View>
      <Carosalimagescreen images={image} />

      <ScrollView style={styles.root}>
        
        <Text style={styles.price}>{data.title} </Text>
        <Text style={styles.fonty}>category :{data.category}</Text>
        <Text style={styles.price}> Brand:{data.brand}</Text>
      
      
        <View style={styles.ratingsContainer}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={20}
            fractions={2}
            startingValue={data.rating}
            onFinishRating={data.rating}
            readonly={true}
          />
          <Text style={styles.GreenText}>{data.rating}</Text>
        </View>

        <Text style={styles.price}>
          from ${data.price}
          {data.price && (
            <Text style={styles.oldPrice}> {data.discountPercentage}% off</Text>
          )}
        </Text>
        <Text style={styles.description}>{data.discription}</Text>
        <Text style={styles.GreenText}>
          {' '}
          In Stock {data.stock} products are available
        </Text>
      </ScrollView>
    
    </View>
  );
};
