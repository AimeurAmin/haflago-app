import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle'
import PhoneInCallIcon from '../../../../assets/svg/PhoneInCall.svg';
import PhoneIcon from '../../../../assets/svg/Phone.svg';
import MessagesIcon from '../../../../assets/svg/Messages.svg';
import EmailIcon from '../../../../assets/svg/Email.svg';
const ContactSection = () => {
  return (
    <View>
      <SectionTitle title='Contact information' />
      <View style={styles.container}>
        <View style={styles.element}>
          <PhoneInCallIcon width={15} height={15}/>
          <Text style={styles.text}>+213 552 551 812</Text>
        </View>
        <View style={styles.element}>
          <EmailIcon width={15} height={15}/>
          <Text style={styles.text}>m.amin.aimeur@gmail.com</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.element, styles.button]}>
            <PhoneIcon width={15} height={15} />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.element, styles.button]}>
            <MessagesIcon width={15} height={15} />
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ContactSection