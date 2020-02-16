import React from 'react';

import { SplashScreenStyle, SplashScreenLogo, SplashScreenTitle } from './style';

import instaLogo from 'assets/insta.png';

export default () => {
  return (
    <SplashScreenStyle>
      <SplashScreenLogo src={instaLogo} />
      <SplashScreenTitle>InstaMetrics</SplashScreenTitle>
    </SplashScreenStyle>
  )
}