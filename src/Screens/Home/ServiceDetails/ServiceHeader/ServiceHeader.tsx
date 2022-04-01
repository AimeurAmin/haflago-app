import { View, Text, Image } from 'react-native';
import React from 'react'
import styles from './styles'
import CardHeader from '../../../../Components/Shared/Card/CardHeader/CardHeader';
import adjust from '../../../../utils/RN/adjust';
import { Rating } from 'react-native-elements';
import normalize from '../../../../utils/RN/normalizeSize';
import PositionIcon from '../../../../assets/svg/Position.svg';


const ServiceHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.picCotnainer}>
          <Image
            source={require('../../../../assets/Userpic.png')}
            style={styles.pic}
          />
        </View>
        <View style={styles.serviceInfo}>
          <View style={styles.serviceTitleContainer}>
            <Text style={styles.userName}>Maria Faty</Text>
          </View>
          <View style={styles.serviceTitleContainer}>
            <Text style={styles.serviceTitle}>Robe Constantinoise</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Rating
              imageSize={15}
              fractions={1}
              startingValue={3.52}
              style={{ paddingVertical: 5 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.positionContainer}>
          <Text style={styles.positionText}>Constantine</Text>
          <PositionIcon width={adjust(14)} height={adjust(14)} />
        </View>
        <Text style={styles.timeText}>04:23 PM</Text>
      </View>
    </View>
  )
}

export default ServiceHeader