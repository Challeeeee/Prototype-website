import './style.css';
import { BOOKING_URL } from './config';

for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-booking-link]')) {
  link.href = BOOKING_URL;
}
