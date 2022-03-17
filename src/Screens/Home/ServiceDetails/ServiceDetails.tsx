import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Animated, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SideMenu from '../../../Components/Shared/SideMenu/SideMenu';
import styles from './styles';
import { DimensionsModel } from '../../../Redux/Actions/appActions';
import { useSelector } from 'react-redux';
import MenuBar from '../../../Components/Shared/MenuBar/MenuBar';
import NavFooter from '../../../Components/Shared/NavFooter';
import ArrowRight from '../../../assets/svg/GalleryArrowRight.svg';
import ArrowLeft from '../../../assets/svg/GalleryArrowLeft.svg';
import normalize from '../../../utils/RN/normalizeSize';
import ImageModel from '../../../Components/Shared/ImageModel/ImageModel';
import { useState, useRef } from 'react';

const ServiceDetails = ({navigation}: any) => {
  const dimensions: DimensionsModel = useSelector(({appState}: any) => appState.dimensions);
  const style = styles(dimensions);
  const dummyImages = [
    {
      id: '1',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fd3b7qee9b7ig9nlppgov&w=640&q=75'
    },{
      id: '2',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fqsfh364vpftwtgg7m7e3&w=640&q=75'
    },{
      id: '3',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fmh16odjkjt0dmfm24asm&w=640&q=75'
    }, {
      id: '4',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fumwutae8fy0s0xhatgz1&w=640&q=75'
    },{
      id: '5',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fd3b7qee9b7ig9nlppgov&w=640&q=75'
    },{
      id: '6',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fqsfh364vpftwtgg7m7e3&w=640&q=75'
    },{
      id: '7',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fmh16odjkjt0dmfm24asm&w=640&q=75'
    }, {
      id: '8',
      src: 'https://www.haflago.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fadastra-creative%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Fumwutae8fy0s0xhatgz1&w=640&q=75'
    }
  ]
  const [visibleModel, setVisibleModel] = useState('');
  const topRef = useRef<any>();
  const thumbRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const {width} = Dimensions.get('screen');
  const IMAGE_SIZE = ((Dimensions.get('screen').width + Dimensions.get('screen').height) / 2) * .13;

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
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <MenuBar allowBack={true} navigation={navigation}/>
        <ImageModel visible={visibleModel} close={() => setVisibleModel('')} imageUri={visibleModel}/>
        <ScrollView style={style.content}>
          <View>
            <FlatList
              ref={topRef}
              data={dummyImages}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled={true}
              bounces={false}
              scrollEventThrottle={2}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(event) => {
                scrollToActiveIndex(Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width));
              }}
              renderItem={({item}) => (
                <View style={style.picCotnainer}>
                  <TouchableWithoutFeedback onPress={() => setVisibleModel(item.src)}>
                    <Image
                      source={{uri: item.src}}
                      style={style.pic}
                      />
                  </TouchableWithoutFeedback>
                </View>
              )}
              />
              <TouchableOpacity style={style.arrowLeft} onPress={() => scrollToActiveIndex(activeIndex > 0 ? activeIndex - 1 : activeIndex)}>
                <ArrowLeft width={normalize(30)} height={normalize(45)} />
              </TouchableOpacity>
              <TouchableOpacity style={style.arrowRight} onPress={() => scrollToActiveIndex(activeIndex < dummyImages.length - 1 ? activeIndex + 1 : activeIndex)}>
                <ArrowRight width={normalize(30)} height={normalize(45)} />
              </TouchableOpacity>
          </View>
          <View style={style.detailsContainer}>
            <View style={style.details}>
                <View style={style.imagesIndicator}>
                  <TouchableOpacity >
                    <ArrowLeft width={normalize(30)} height={normalize(45)} />
                  </TouchableOpacity>
                  <FlatList
                    ref={thumbRef}
                    data={dummyImages}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled={false}
                    bounces={false}
                    scrollEventThrottle={32}
                    showsHorizontalScrollIndicator={false}
                    style={style.smallFlatList}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                    renderItem={({item, index}) => {                      
                      return (
                        <TouchableWithoutFeedback onPress={() => scrollToActiveIndex(index)}>
                          <Image
                            source={{uri: item.src}}
                            style={[style.imageButton, {
                              borderWidth: 2,
                              borderColor: activeIndex === index ? '#000' : 'transparent' 
                            }]}
                            />
                        </TouchableWithoutFeedback>
                      )
                    }}
                    />
                    <TouchableOpacity>
                      <ArrowRight width={normalize(30)} height={normalize(45)} />
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        </ScrollView>
        <NavFooter />
      </View>
    </SafeAreaView>
  )
}

export default ServiceDetails