import { createGlobalStyle } from 'styled-components';

// lato black, regular, extrabold (bold)
import LatoBlack from '../fonts/Lato/Lato-Black.ttf';
import LatoRegular from '../fonts/Lato/Lato-Regular.ttf';
import LatoBold from '../fonts/Lato/Lato-Bold.ttf';
import RobotoMonoRegular from '../fonts/RobotoMono/RobotoMono-Regular.ttf';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Lato Black';
    src: url(${LatoBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Lato Regular';
    src: url(${LatoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Lato Bold';
    src: url(${LatoBold}) format('truetype');
  }

  .font-green {
    color: ${GREEN};
  }

  .font-blue {
    color: ${BLUE};
  }

  .font-brown {
    color: ${BROWN};
  }

  .font-white {
    color: ${WHITE};
  }

  .page-header {
    font-family: Lato Black;
    font-size: 100px;
  }

  .section-header {
    font-family: Lato Black;
    font-size: 34px;
  }

  .body-text {
    line-height: 140%;
    font-family: Lato Regular;
    font-size: 20px;
  }

  .secondary-text {
    font-family: Lato Regular;
    font-size: 16px;
    letter-spacing: 3px;
  }

  .nav-main-link {
    font-family: Lato Bold;
    font-size: 22px;
  }

  .nav-sub-link {
    font-family: Lato Regular;
    font-size: 22px;
  }

  .footer-header {
    font-family: Lato Bold;
    font-size: 22px;
  }

  .footer-link {
    font-family: Lato Regular;
    font-size: 22px;
  }

  .nav-logo {
    font-family: Lato Bold;
    font-size: 26px;
  }
`;

