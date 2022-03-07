import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

const dummyData = {
  title: 'Robe constantinoiase',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus aperiam ut hic architecto cum, sequi eaque dolor voluptas assumenda eveniet nobis neque ab. Cum molestias voluptate ullam repellat inventore ipsum.',
  image: require('../../../../assets/Userpic.png'),
}
const CardContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dummyData.title}</Text>
      <Text style={styles.description}>{dummyData.description}</Text>
      <Image
        source={dummyData.image}
        style={styles.image}
      />
    </View>
  )
}

export default CardContent