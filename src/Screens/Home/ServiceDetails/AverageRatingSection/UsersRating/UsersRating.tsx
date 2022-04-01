import { View, Text } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-elements';
import UserIcon from '../../../../../assets/svg/User.svg'
import styles from './styles';

const UsersRating = ({ratings}: any) => {
  const getTotalUsers = (ratings: any) => Object.keys(ratings).reduce((acc: any, curr) => ratings[curr] + acc ,0);

  const getAverage = (ratings: any) => {
    const average = Object.keys(ratings).reduce((acc: any, curr: any) => (curr * ratings[curr]) + acc ,0) / getTotalUsers(ratings);

    return average ;
  }
  const formatNum = (n: string[]) => {
    var n = ('' + n).split('.');
    var num = n[0];
    var dec = n[1];
    var r, s, t;
  
    if (num.length > 3) {
      s = num.length % 3;
  
      if (s) {
        t = num.substring(0,s);
        num = t + num.substring(s).replace(/(\d{3})/g, " $1");
      } else {
        num = num.substring(s).replace(/(\d{3})/g, " $1").substring(1);
      }
    }
  
    if (dec && dec.length > 3) {
      dec = dec.replace(/(\d{3})/g, "$1 ");
    }
  
    return num + (dec? '.' + dec : '');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.ratingText}>{getAverage(ratings).toFixed(1)}</Text>
      <Rating
        imageSize={16}
        fractions={1}
        startingValue={getAverage(ratings)}
        readonly
      />
      <View style={styles.usersVotesContainer}>
        <UserIcon width={18} height={18} />
        <Text style={styles.votesText}>{formatNum(getTotalUsers(ratings))} Votes</Text>
      </View>

    </View>
  )
}

export default UsersRating