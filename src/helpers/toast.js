import { Notify } from 'quasar'

export default {
  success(message) {
    Notify.create({
      type: 'positive',
      message,
      color: 'green-6',
      position: 'top-right',
      progress: false,
      closeBtn: true,
    })
  },
  error(message) {
    Notify.create({
      type: 'negative',
      message,
      color: 'red-7',
      position: 'top-right',
      progress: false,
      closeBtn: true,
    })
  },
  warning(message) {
    Notify.create({
      type: 'warning',
      message,
      position: 'top-right',
      progress: false,
      closeBtn: true,
    })
  },
}
