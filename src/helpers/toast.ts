import { Notify, QNotifyCreateOptions } from 'quasar';

export default {
  success(message: string, overrides: QNotifyCreateOptions = {}) {
    Notify.create({
      type: 'positive',
      message,
      color: 'green-6',
      position: 'top-right',
      progress: false,
      closeBtn: true,
      ...overrides,
    });
  },
  error(message: string, overrides: QNotifyCreateOptions = {}) {
    Notify.create({
      type: 'negative',
      message,
      color: 'red-7',
      position: 'top-right',
      progress: false,
      closeBtn: true,
      ...overrides,
    });
  },
  warning(message: string, overrides: QNotifyCreateOptions = {}) {
    Notify.create({
      type: 'warning',
      message,
      // color: "red-9",
      position: 'top-right',
      progress: false,
      closeBtn: true,
      ...overrides,
    });
  },
};
