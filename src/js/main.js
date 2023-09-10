import '../scss/styles.scss';
import 'font-awesome/css/font-awesome.min.css';

import * as bootstrap from 'bootstrap';
import { initializeTracking } from './tracking';

document.addEventListener('DOMContentLoaded', () => {
    initializeTracking();
});