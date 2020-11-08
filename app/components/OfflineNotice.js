import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

import Text from './TextInput'
import colors from '../config/colors'

function OfflineNotice(props) {
  const netInfo = useNetInfo()

  if (netInfo.type !== 'unkown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    )

  return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 1,
    width: '100%',
  },
  text: {
    color: colors.white,
  },
})

export default OfflineNotice
