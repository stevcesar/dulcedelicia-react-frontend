import moment from 'moment';

// formato de fecha

export const dateFormat = (date) => {
  return moment(date).format('ll');
};
