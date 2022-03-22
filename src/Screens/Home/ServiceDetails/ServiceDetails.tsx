import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles';
import { DimensionsModel } from '../../../Redux/Actions/appActions';
import { useSelector } from 'react-redux';
import MenuBar from '../../../Components/Shared/MenuBar/MenuBar';
import NavFooter from '../../../Components/Shared/NavFooter';
import ArrowLeft from '../../../assets/svg/GalleryArrowLeft.svg';
import { useState, useRef } from 'react';
import FavoriteButton from './FavoriteButton/FavoriteButton';
import ShareButton from './ShareButton/ShareButton';
import ServiceHeader from './ServiceHeader/ServiceHeader';
import ServiceDescription from './ServiceDescripton/ServiceDescription';
import Gallery from './Gallery/Gallery';
import SelectInput from '../../../Components/Shared/SelectInput/SelectInput';

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
];


const detailsText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, metus id vehicula aliquam, dolor magna euismod leo, nec faucibus nunc mi quis ipsum. In nec porttitor magna, sed porta tellus. Praesent ut arcu at ligula vehicula congue sit amet vitae metus. 

Praesent volutpat elementum ornare. Phasellus eget felis maximus, bibendum lectus vel, gravida ipsum. Aliquam rutrum urna eget pharetra maximus. Pellentesque mollis pharetra lacus, ac pharetra tellus laoreet at. Aenean blandit lorem ipsum, eu finibus sem rutrum vitae. 

Duis porttitor dui sit amet nibh blandit, eget laoreet turpis feugiat. Phasellus vestibulum suscipit neque.
`;

const ServiceDetails = ({navigation}: any) => {
  const dimensions: DimensionsModel = useSelector(({appState}: any) => appState.dimensions);
  const style = styles(dimensions);
  // const [open, setOpen] = useState(false);
    
  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <MenuBar allowBack={true} navigation={navigation}/>
        <ScrollView style={style.content}>
          <Gallery images={dummyImages}/>
          <View style={style.detailsContainer}>
            <View style={style.shareContainer}>
              <TouchableOpacity>
                <FavoriteButton />
              </TouchableOpacity>
              <TouchableOpacity style={style.shareButton}>
                <ShareButton />
              </TouchableOpacity>
            </View>
            <ServiceHeader />
            <ServiceDescription description={detailsText}/>
            {/* <SelectInput onChange={(item: any) => console.log(item)} placeholder='Please select product'/> */}
          </View>
        </ScrollView>
        <NavFooter />
        
      </View>
    </SafeAreaView>
  )
  
}

export default ServiceDetails

