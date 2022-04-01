import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const SectionTitle = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default SectionTitle