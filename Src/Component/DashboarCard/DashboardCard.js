import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../Constant/Dimension';
import {styles} from './style';

export const Dashboardcard = ({...props}) => {
  const data = {
    image: props.Image,
    title: props.Title,
    brand: props.brand,
    stock: props.stock,
    discountPercentage: props.discountPercentage,
    category: props.category,
    thumbnail: props.thumbnail,
    discription: props.description,
    rating: props.ratings,
    id: props.id,
    price: props.Price,
  };

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailProducts', {Data: data})}
      style={styles.root}>
      <Card.Cover
        source={{uri: props.thumbnail}}
        style={styles.imageView}
        resizeMode="contain"
      />
      <View style={styles.rightContainer}>
        <View style={{width: wp('40%')}}>
          <Text style={styles.title} numberOfLines={3}>
            {props.Title}
          </Text>
        </View>

        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          <View style={{width: wp('30%')}}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={20}
            fractions={2}
            startingValue={props.ratings}
            onFinishRating={props.ratings}
            readonly={true}
          />
          </View>
          <Text style={styles.ratingText}>{props.ratings}</Text>
          
          <TouchableOpacity>
            <Image
              source={require('../../assets/Cart.png')}
              style={styles.Cartimage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>${props.Price}</Text>
      </View>
    </TouchableOpacity>
  );
};
