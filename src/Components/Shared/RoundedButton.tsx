import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
// import MIcon from 'react-native-vector-icons/MaterialIcons'
import MIcon from 'react-native-vector-icons/AntDesign'
const RoundedButton = ({onPress, isLoading}: any) => {
  const style = styles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.button}>
      <Text style={style.buttonText}>CREATE ACCOUNT</Text>
      <MIcon name={isLoading? 'loading1' : 'arrowright'} size={21} color={'#FFF'} />
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = () => StyleSheet.create({
  button: {
    backgroundColor: '#482769',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 50
  },
  buttonText: {
    marginRight: 20,
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500'
  }
});
