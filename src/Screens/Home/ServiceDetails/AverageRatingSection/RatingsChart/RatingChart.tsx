import { View, Text, Dimensions } from 'react-native';
import React from 'react'
import styles from './styles'

const RatingChart = ({ratings}: any) => {
  const defaultValue = Dimensions.get('screen').width * (3/5);

  const getHighestRate = (ratings: any) => {
    return ratings[Object.keys(ratings).reduce((acc: any, curr): number => ratings[curr] > ratings[acc] ? curr : acc, 1)];
  }

  const getPercentage = (ratings: any, index: number) => {
    const highestValue = getHighestRate(ratings);    
    return ratings[index] * 100 / highestValue;
  };

  const colors = ['#F78B5A', '#F9B235', '#FCD835', '#AED787', '#78C8A1']
  
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View style={styles.ratingContainer}>
          <Text style={styles.number}>{index+1}</Text>
          <View style={styles.chartBarContainer}>
            <View style={[styles.chartBar, {backgroundColor: color, width: `${getPercentage(ratings, index+1)}%`} ]} />
          </View>
        </View>
      ))}
    </View>
  )
}

export default RatingChart