import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MIcon from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';
import { relative } from 'node:path/win32';
import normalize from '../../utils/RN/normalizeSize';

const RoundedButton = ({onPress, isLoading, text}: any) => {
  const style = styles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.button}>
      <Text style={style.buttonText}>{text}</Text>
      {
        isLoading ? (
          <View style={style.loading}>
            <LottieView source={require('../../assets/lottie/loading.json')} autoPlay loop></LottieView>
          </View>
        ) : (
          <View style={style.loading}>
            <MIcon name={isLoading? 'loading1' : 'arrowright'} size={21} color={'#FFF'} />
          </View>
        )
      }
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = () => StyleSheet.create({
  button: {
    backgroundColor: '#ED0E8F',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: 250,
    borderRadius: 50,
    position: 'relative'
  },
  buttonText: {
    marginRight: 20,
    color: '#FFF',
    fontSize: normalize(16),
    fontWeight: '500'
  },
  loading: {
    alignContent: 'flex-end',
    position: 'absolute',
    width: normalize(55),
    height: normalize(55),
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
