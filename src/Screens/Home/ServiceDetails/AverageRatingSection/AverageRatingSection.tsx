import { View, Text } from 'react-native'
import React from 'react'
import UsersRating from './UsersRating/UsersRating'
import styles from './styles'
import RatingChart from './RatingsChart/RatingChart';

const dummyRatings: any = {
  5: 990,
  4: 300,
  3: 400,
  2: 12,
  1: 20
};

const AverageRatingSection = () => {
  return (
    <View style={styles.container}>
      <UsersRating ratings={dummyRatings}/>
      <RatingChart ratings={dummyRatings} />
    </View>
  )
}

export default AverageRatingSection