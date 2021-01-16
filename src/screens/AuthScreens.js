import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from 'modules';

const AuthStack = createStackNavigator();

const AuthScreens = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="login"
      component={Login}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthScreens;
