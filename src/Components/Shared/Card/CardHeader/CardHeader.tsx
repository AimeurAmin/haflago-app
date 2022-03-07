import React from 'react'
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { Rating } from 'react-native-elements';
import normalize from '../../../../utils/RN/normalizeSize';
import LocationIcon from '../../../../assets/svg/Location.svg';

const CardHeader = () => {

  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.picCotnainer}>
          <Image
            source={require('../../../../assets/Userpic.png')}
            style={styles.userpic}
          />
        </View>
        <View style={styles.userInfo}>
          <Text>Faty</Text>
          <Rating
              imageSize={normalize(15)}
              fractions={1}
              startingValue={3.52}
              onFinishRating={ratingCompleted}
              style={{ paddingVertical: 5 }}
            />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.locationContainer}>
          <Text>Constantine</Text>
          <LocationIcon width={normalize(18)} height={normalize(18)} />
        </View>
        <Text>01:13 AM</Text>
      </View>
    </View>
  )
}

export default CardHeader