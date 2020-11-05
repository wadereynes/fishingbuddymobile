import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
})

export default styles
