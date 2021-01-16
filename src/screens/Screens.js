import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreens from './AuthScreens';
import AppScreens from './AppScreens';
import navigationRef from './navigationRef';

const Screens = () => {
  const authToken = true;

  return (
    <NavigationContainer ref={navigationRef}>
      {authToken ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};

Screens.propTypes = {};

export default Screens;
