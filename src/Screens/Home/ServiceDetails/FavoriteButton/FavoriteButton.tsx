import { View, Text } from 'react-native'
import React from 'react'
import FavoriteIcon from '../../../../assets/svg/FavoriteIcon.svg';
import styles from './styles';
import { normalizeWidth } from '../../../../utils/RN/normalizeSize';
import normalize from '../../../../utils/RN/normalizeSize';
import adjust from '../../../../utils/RN/adjust';

const FavoriteButton = () => {
  return (
    <View style={styles.container}>
      <FavoriteIcon width={adjust(14)} height={adjust(14)} />
      <Text style={styles.text}>Add to favorite</Text>
    </View>
  )
}

export default FavoriteButton