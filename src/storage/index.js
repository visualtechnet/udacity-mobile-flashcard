import { AsyncStorage } from 'react-native'

const AsyncStore = {
  get: async (key) => {
    const value = await AsyncStorage.getItem(key, (error, result) => {
              
      return JSON.parse(result)
    })

    return value
  },
  set: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  },
  remove: async (key) => {
    await AsyncStorage.removeItem(key)
  },
  clear: async () => {
    await AsyncStorage.clear()
  }
}

export { AsyncStore }