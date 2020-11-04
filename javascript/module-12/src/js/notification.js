import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

export default {
  click() {
    error({
      text: 'Введите больше одной буквы',
      delay: 1000,
    });
  },
};
