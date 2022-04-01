import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import normalize from '../../utils/RN/normalizeSize';

const NavItem = ({Icon, text}: {Icon: any, text: string}) => {
  return (
    <View style={styles.container}>
      <Icon width={normalize(20)} height={normalize(20)} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default NavItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    marginTop: 3,
    fontSize: normalize(12),
  }
})