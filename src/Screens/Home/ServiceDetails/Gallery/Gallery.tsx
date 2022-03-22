import { View, Text, FlatList, TouchableWithoutFeedback, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './styles';
import ArrowLeft from '../../../../assets/svg/GalleryArrowLeft.svg';
import ArrowRight from '../../../../assets/svg/GalleryArrowRight.svg';
import normalize from '../../../../utils/RN/normalizeSize';
import ImageModel from '../../../../Components/Shared/ImageModel/ImageModel';

const Gallery = ({images}: any) => {
  const [visibleModel, setVisibleModel] = useState('');
  const topRef = useRef<any>();
  const thumbRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const {width} = Dimensions.get('screen');
  const IMAGE_SIZE = ((width + Dimensions.get('screen').height) / 2) * .13;  

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
   
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true
    });
    if(((index + 1) * (IMAGE_SIZE + 20)) >  (width / 2)) {
      thumbRef?.current?.scrollToOffset({
        offset: ((index + 1) * (IMAGE_SIZE + 20)) - ((width / 2) - (IMAGE_SIZE / 2)),
        animated: true
      })
    }else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true
      })
    }
  }
  
  return (
    <View style={styles.container}>
      <ImageModel visible={visibleModel} close={() => setVisibleModel('')} imageUri={visibleModel}/>
      <View>
        <FlatList
          ref={topRef}
          data={images}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled={true}
          bounces={false}
          scrollEventThrottle={2}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            scrollToActiveIndex(Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width));
          }}
          renderItem={({item}) => {
            console.log(item.src);
            
            return (
              <View style={styles.picCotnainer}>
                <TouchableWithoutFeedback onPress={() => setVisibleModel(item.src)}>
                  <Image
                    source={{uri: item.src}}
                    style={styles.pic}
                    />
                </TouchableWithoutFeedback>
              </View>
            )
          }}
          />
          <TouchableOpacity style={styles.arrowLeft} onPress={() => scrollToActiveIndex(activeIndex > 0 ? activeIndex - 1 : activeIndex)}>
            <ArrowLeft width={normalize(30)} height={normalize(45)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowRight} onPress={() => scrollToActiveIndex(activeIndex < images.length - 1 ? activeIndex + 1 : activeIndex)}>
            <ArrowRight width={normalize(30)} height={normalize(45)} />
          </TouchableOpacity>
      </View>
      <View style={styles.imagesThumbList}>
        <TouchableOpacity onPress={() => scrollToActiveIndex(activeIndex > 0 ? activeIndex - 1 : activeIndex)} >
          <ArrowLeft width={normalize(30)} height={normalize(45)} />
        </TouchableOpacity>
        <FlatList
          ref={thumbRef}
          data={images}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled={false}
          bounces={false}
          scrollEventThrottle={32}
          showsHorizontalScrollIndicator={false}
          style={styles.smallFlatList}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          renderItem={({item, index}) => {                      
            return (
              <TouchableWithoutFeedback onPress={() => scrollToActiveIndex(index)}>
                <Image
                  source={{uri: item.src}}
                  style={[styles.imageButton, {
                    borderWidth: 2,
                    borderColor: activeIndex === index ? '#3B276A' : 'transparent' 
                  }]}
                  />
              </TouchableWithoutFeedback>
            )
          }}
          />
        <TouchableOpacity onPress={() => scrollToActiveIndex(activeIndex < images.length - 1 ? activeIndex + 1 : activeIndex)}>
          <ArrowRight width={normalize(30)} height={normalize(45)} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Gallery;