import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import WhiteLogo from '../../../assets/WhiteLogo.svg';
import normalize from '../../../utils/RN/normalizeSize';
import styles from './styles';
import RoundedButton from '../../../Components/Shared/RoundedButton';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../../Redux/Actions/authActions';
import { AuthStateModel } from '../../../Redux/Models/AuthModel';
import Snackbar from 'react-native-snackbar';

const CELL_COUNT = 6;


const ValidateAccountScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [codeSentCounter, setCodeSentCounter] = useState(0);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const {username, verifyEmail} = useSelector(
    ({authState : { user: { data: { username }}, verifyEmail }}: {authState: any}): any => ({username, verifyEmail}))
    ;

  useEffect(() => {
    if(value.length === 6 && !verifyEmail) {
      dispatch(validateEmail({username, v_code: value}));
      if(verifyEmail === false) {
        Snackbar.show({
          text: 'Code invalide!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
          action: {
            text: 'OK',
            onPress: () => { },
          },
        });
      }
    }
    if(verifyEmail) {
      Snackbar.show({
        text: 'Votre adresse mail a bien été vérifier',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'green',
        action: {
          text: 'OK',
          onPress: () => { },
        },
      });
      navigation.navigate('LoginScreen', {screen: 'LoginScreen'});
    }
  }, [value, verifyEmail]);
  

  return (
    <View style={styles.container}>
      <View style={styles.hint}>
        <WhiteLogo width={normalize(180)} height={normalize(100)} />
        <Text style={styles.hintText}>A 6-digit confirmation code has been sent to you via E-mail. Please check your Inbox.</Text>
      </View>
      <View style={{flex: 1}}>

        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View key={index} style={isFocused ? styles.sellContainerFocused : styles.sellContainer}>
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>

      {/* <View style={styles.buttonContainer}>
        <RoundedButton text={'Confirm'} onPress={handleSubmit}/>
      </View> */}

    </View>
  )
}

export default ValidateAccountScreen;