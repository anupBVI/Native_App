import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    { title: 'Item 1', text: 'Text 1' },
    { title: 'Item 2', text: 'Text 2' },
    { title: 'Item 3', text: 'Text 3' },
    { title: 'Item 4', text: 'Text 4' },
    { title: 'Item 5', text: 'Text 5' },
  ];

  const _renderItem = ({ item, index }:any) => {
    return (
      <View
        style={{
          backgroundColor: 'green',
          borderRadius: 5,
          height: 250,
          width : 200,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout="default"
          data={carouselItems}
          sliderWidth={300}
          style={{ flex: 1 }}
          itemWidth={300}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCarousel;