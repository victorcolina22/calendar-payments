export const MONTHLY_SPEND = 'Monthly spend';
export const SIGN_DOLLAR = '$';
export const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const REGEX_FORMAT_NUMBER = /\B(?=(\d{3})+(?!\d))/g;

export const BASE_URL = import.meta.env.SECRET_BASE_URL;
export class EndpointsConstants {
  static readonly GET_SPOTIFY_PRICING = '/api/get-spotify-pricing';
}
