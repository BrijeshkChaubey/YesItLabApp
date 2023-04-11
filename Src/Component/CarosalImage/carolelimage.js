import React, {useState, useCallback} from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import { styles } from './style';

export const Carosalimagescreen = (...props) => {
   
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const data=props[0].images 
  
  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
   
  }, []);

  return (
   
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 50}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 5}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 60,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />

      <View style={styles.dots}>
        {data.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
   
    
  );
};

