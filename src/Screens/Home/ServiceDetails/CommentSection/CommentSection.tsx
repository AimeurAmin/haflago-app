import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import styles from './styles';
import { Rating } from 'react-native-elements';
import ArrowDown from '../../../../assets/svg/ArrowDown.svg';
import ArrowUp from '../../../../assets/svg/ArrowUp.svg';


const CommentSection = ({userComments}: any) => {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <View style={styles.container}>
      {userComments.map((comment: any, index: number)=> (
        (showMore || (index === 0)) && (
          <View style={styles.singleComment}>
            <View style={styles.picCotnainer}>
              <Image
                source={require('../../../../assets/Userpic.png')}
                style={styles.pic}
              />
            </View>
  
            <View key={comment.id} style={styles.commentUser}>
              <View style={styles.serviceInfo}>
                <Text style={styles.userName}>Robe Constantinoise</Text>
                <Rating
                  type='custom'
                  imageSize={16}
                  fractions={0}
                  ratingColor='#979797'
                  ratingBackgroundColor='#D4D4D4'
                  tintColor='white'
                  startingValue={comment.rating}
                  readonly
                  style={{ paddingVertical: 5 }}
                />
              </View>
              <Text ellipsizeMode='clip' style={styles.textComment}>
                {comment.comment}
              </Text> 
            </View>
          </View>
        )
      ))}

      {(userComments.length >= 1) && (
        <TouchableOpacity onPress={() => setShowMore(prev => !prev)} style={styles.showMoreButton}>
          <Text style={styles.textButton}>Show {showMore ? 'less': 'more'}</Text>
          {showMore? <ArrowUp width={15} height={15} /> : <ArrowDown width={15} height={15} />}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default CommentSection;