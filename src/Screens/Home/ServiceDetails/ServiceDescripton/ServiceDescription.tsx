import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ServiceDescription = ({description}: {description: string}) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>{description.toString()}</Text>
    </View>
  )
}

export default ServiceDescription