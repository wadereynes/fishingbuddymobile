import React from 'react'
import AppText from './AppText'
import { TouchableOpacity, StyleSheet } from 'react-native'

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
})

export default PickerItem
