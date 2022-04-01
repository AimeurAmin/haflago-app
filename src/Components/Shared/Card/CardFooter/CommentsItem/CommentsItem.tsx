import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import CommentIcon from '../../../../../assets/svg/Comment.svg';
import styles from './styles';
import normalize from '../../../../../utils/RN/normalizeSize';

const CommentItem = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <TouchableOpacity style={styles.container}>
      <CommentIcon width={normalize(15)} height={normalize(15)} />
      <Text style={styles.text}>Comments (1)</Text>
    </TouchableOpacity>
  )
}

export default CommentItem