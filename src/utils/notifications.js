import { Notifications, Permissions } from 'expo'
import { NOTIFICATION_KEY } from '../utils/constants'
import { AsyncStore } from '../storage';

export function clearLocationNotifications () {
  return AsyncStore.remove(NOTIFICATION_KEY)
  .then(() => {
    Notifications.cancelAllScheduledNotificationsAsync()
  })
}

const createNotification = () => {
  return {
    title: 'Logo',
    body: 'Dont forget to take a quiz for today',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocationNotification () {
  AsyncStore.get(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStore.set(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}