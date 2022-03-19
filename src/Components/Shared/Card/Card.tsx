import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CardHeader from './CardHeader/CardHeader';
import CardContent from './CardContent/CardContent';
import styles from './styles';
import CardFooter from './CardFooter/CardFooter';

const Card = ({onPress}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CardHeader />
      <CardContent />
      <CardFooter />
    </TouchableOpacity>
  )
}

export default Card;