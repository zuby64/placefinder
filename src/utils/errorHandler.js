import { showMessage } from 'react-native-flash-message';

export const showMessage = (title, message) => {
  showMessage({
    message: title,
    description: message,
    type: 'danger',
    icon: 'auto',
    duration: 5000,
    floating: true,
  });
};
