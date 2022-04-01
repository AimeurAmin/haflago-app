import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ShareIcon from '../../../../assets/svg/ShareIcon.svg';
import adjust from '../../../../utils/RN/adjust';

const ShareButton = () => {
  return (
    <View style={styles.container}>
      <ShareIcon width={adjust(14)} height={adjust(14)} />
      <Text style={styles.text}>Share</Text>
    </View>
  )
}

export default ShareButton