import { AsyncStorage } from 'react-native'
// import moment from 'moment'
import daysjs from 'dayjs'
import { uniqueId } from 'lodash/uniqueId'

const prefix = 'cache'
const expiryInMinutes = 5

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
  } catch (error) {
    console.log(error)
  }
}

const isExpired = (item) => {
  const now = daysjs()
  const storedTime = daysjs(item.timestamp)
  return now.diff(storedTime, 'minute') > 5
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key)
    const item = JSON.parse(value)

    if (!item) return null

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key)
      return null
    }

    return item.value
  } catch (error) {
    console.log(error)
  }
}

export default {
  store,
  get,
}
