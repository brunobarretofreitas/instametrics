import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import Smartphone, {
  SmartphoneScreen, SmartphoneHeader,
  SmartphoneFooter, SmartphoneAudio,
  SmartphoneButton
} from 'components/Smartphone';

import SplashScreen from 'components/Smartphone/SplashScreen';

import Container from 'components/Container';
import HomeScreen from 'pages/Home';

export const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  setTimeout(
    () => setShowSplashScreen(false),
    2000
  );

  return (
   <Container center>
    <Smartphone>
      <SmartphoneHeader>
        <SmartphoneAudio />
      </SmartphoneHeader>
      <SmartphoneScreen>
        {
          showSplashScreen ?
            <SplashScreen /> :
            <HomeScreen />
        }
      </SmartphoneScreen>
      <SmartphoneFooter>
        <SmartphoneButton />
      </SmartphoneFooter>
    </Smartphone>
    <GlobalStyle />
   </Container>
  );
}

export default App;
