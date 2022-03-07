import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import FavoriteIcon from '../../../../../assets/svg/Favorite.svg';
import FavoriteClickedIcon from '../../../../../assets/svg/FavoriteClicked.svg';
import normalize from '../../../../../utils/RN/normalizeSize';
import styles from './styles';

const FavoriteItem = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setClicked((prev) => !prev)}>
        {clicked? <FavoriteClickedIcon width={normalize(15)} height={normalize(15)} /> : <FavoriteIcon  width={normalize(15)} height={normalize(15)} /> }
      </TouchableOpacity>
      <Text style={styles.text}>Favorite (2)</Text>
    </View>
  )
}

export default FavoriteItem