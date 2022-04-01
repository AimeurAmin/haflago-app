import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import styles from './styles';
import CommentIcon from '../../../../assets/svg/Comment.svg';
import SendIcon from '../../../../assets/svg/Send.svg';
import { Rating } from 'react-native-elements';

const RatingSection = () => {
  return (
    <View>
      <SectionTitle title='Rating & Comments' />
      <View style={styles.textField}>
        <View style={styles.iconContainer}>
          <CommentIcon width={20} height={20} />
        </View>
        <TextInput multiline={true} style={styles.input} placeholder='Your opinion...'/>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.starsContainer}>
          <Text style={styles.starsText}>Your rating:</Text>
          <Rating
            imageSize={22}
            fractions={0}
            startingValue={5}
            style={{ paddingVertical: 5, marginLeft: 5, }}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
          <SendIcon width={15} height={15} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RatingSection