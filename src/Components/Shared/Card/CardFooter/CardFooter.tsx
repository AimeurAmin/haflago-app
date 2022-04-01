import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';
import FavoriteItem from './FavoriteItem/FavoriteItem';
import CommentItem from './CommentsItem/CommentsItem';

const CardFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <FavoriteItem />
        <CommentItem />
      </View>
    </View>
  )
}

export default CardFooter;