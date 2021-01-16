import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pokemon, Evolution} from 'modules';
import HomeTabs from './HomeTabs';

const AppStack = createStackNavigator();

const AppScreens = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="home"
      component={HomeTabs}
      options={{headerShown: false}}
    />
    <AppStack.Screen
      name="pokemon"
      component={Pokemon}
      options={{
        headerTitle: 'Pokémon',
      }}
    />
    <AppStack.Screen
      name="evolution"
      component={Evolution}
      options={{
        headerTitle: 'Evolución',
      }}
    />
  </AppStack.Navigator>
);

export default AppScreens;
