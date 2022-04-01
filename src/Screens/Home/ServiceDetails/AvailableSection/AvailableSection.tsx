import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import CorrectIcon from '../../../../assets/svg/Correct.svg';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';

const AvailableSection = () => {
  return (
    <View>
      <SectionTitle title={'Available'}/>
      <View style={styles.availableContainer}>
        {[1, 2, 3, 4].map(item => <View key={item} style={styles.availableItem}>
          <View style={styles.picCotnainer}>
            <Image
              source={require('../../../../assets/PlaceholderAvailableSection.png')}
              style={styles.pic}
            />
          </View>
          <Text style={styles.availableText}>Traditional outfits</Text>
          <CorrectIcon width={25} height={25}/>
        </View>)}
      </View>
    </View>
  )
}

export default AvailableSection