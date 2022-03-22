import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import ArrowLeft from '../../../assets/svg/GalleryArrowLeft.svg';


const SelectInput = ({onChange, placeholder}: any) => {
  const [open, setOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState('');
  return (
    <TouchableOpacity
      onPress={() => setOpen((prev: any) => !prev)}
      style={{ paddingHorizontal: 10, alignItems: 'center', backgroundColor: 'white', flexDirection: 'row', position: 'relative', borderColor: 'black', borderWidth: 1}}>
      <View style={{flex: 1}}>
        <Text>{selectedElement ? selectedElement : placeholder}</Text>
      </View>
      <ArrowLeft width={30} height={30}/>
      <View style={{position: 'absolute', top: '100%', zIndex: 999, width: '100%',backgroundColor: 'green'}}>
        {open && ['elmnt1', 'elmnt2', 'elmnt3'].map(item => (
          <TouchableOpacity style={{padding: 5}} onPress={() => {onChange(item); setOpen(false); setSelectedElement(item)}}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </TouchableOpacity>
  )
}

export default SelectInput