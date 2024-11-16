import { REGEX_FORMAT_NUMBER } from '../constants';

export const formatNumber = (number: number) => {
  if (!number) return '';
  return number.toString().replace(REGEX_FORMAT_NUMBER, '.');
};
