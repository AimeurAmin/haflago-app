import { View, Text, Modal, Alert, Pressable, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import styles from './styles';
import CloseIcon from '../../../assets/svg/GalleryClose.svg';
import normalize from '../../../utils/RN/normalizeSize';

const ImageModel = ({visible, close}: any) => {

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={!!visible}
        onRequestClose={() => {
          close();
        }}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity style={styles.closeIcon} onPress={close}>
            <CloseIcon  width={normalize(50)} height={normalize(50)} />
          </TouchableOpacity>
          <Image
            source={{uri: visible}}
            style={styles.pic}
          />

        </View>
      </Modal>
  )
}

export default ImageModel