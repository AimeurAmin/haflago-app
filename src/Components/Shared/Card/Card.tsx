import React from 'react'
import { View, StyleSheet } from 'react-native';
import CardHeader from './CardHeader/CardHeader';
import CardContent from './CardContent/CardContent';
import styles from './styles';
import CardFooter from './CardFooter/CardFooter';

const Card = () => {
  return (
    <View style={styles.container}>
      <CardHeader />
      <CardContent />
      <CardFooter />
    </View>
  )
}

export default Card;