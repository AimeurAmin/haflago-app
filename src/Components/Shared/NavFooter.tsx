import React from 'react'
import { View, StyleSheet } from 'react-native';
import FeedIcon from '../../assets/svg/Feed.svg';
import InboxIcon from '../../assets/svg/Inbox.svg';
import MenuIcon from '../../assets/svg/Menu.svg';
import FavIcon from '../../assets/svg/FavouriteWhite.svg';
import NavItem from './NavItem';

const NavFooter = () => {
  return (
    <View style={styles.container}>
      <NavItem text='Feed' Icon={FeedIcon}/>
      <NavItem text='Favorite' Icon={FavIcon}/>
      <NavItem text='Inbox' Icon={InboxIcon}/>
      <NavItem text='More' Icon={MenuIcon}/>
    </View>
  )
}

export default NavFooter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#3B276A',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row'
  }
});