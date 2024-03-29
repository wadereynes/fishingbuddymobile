import { useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

import expoPushTokensApi from '../api/expoPushTokens'

export default useNotification = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications()
    // Notifications.addListener((notification) =>
    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      )
  }, [])

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      if (!permission.granted) return

      const token = (await Notifications.getExpoPushTokenAsync()).data
      expoPushTokensApi.register(token)
    } catch (error) {
      console.log('Error getting a push token', error)
    }
  }
}
