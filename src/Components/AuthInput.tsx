import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import CorrectIndicator from '../assets/svg/CorrectIndicator.svg';
import WrongIndicator from '../assets/svg/WrongIndicator.svg';

interface Props {
  isCorrect?: boolean;
  placeholder?: string;
  style: any;
}

const AuthInput = (props: any) => {
  const { isCorrect = false, placeholder = '', style, ...rest } = props;
  return (
    <View style={{...styles.container, ...style}}>
      <TextInput style={styles.textInput} placeholder={placeholder} {...rest}/>
      {isCorrect? <CorrectIndicator width={30} /> : <WrongIndicator width={30} />}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textInput: {
    fontSize: 16,
    flexGrow: 1
  }
});
