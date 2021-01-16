import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Information, MyPokemons, CatchIt} from 'modules';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabStack = createBottomTabNavigator();

function HomeTabs() {
  function screenOptions({route}) {
    function tabBarIconConfig({color, size}) {
      let icon;
      switch (route.name) {
        case 'information':
          icon = <Icon name="home" {...{color, size}} />;
          break;
        case 'my-pokemons':
          icon = <Icon name="optin-monster" {...{color, size}} />;
          break;
        case 'catch-it':
          icon = <Icon name="bullseye" {...{color, size}} />;
          break;
        default:
          icon = null;
      }

      return icon;
    }
    return {tabBarIcon: tabBarIconConfig};
  }

  return (
    <TabStack.Navigator
      initialRouteName="information"
      tabBarOptions={{activeTintColor: '#FF0D0D'}}
      screenOptions={screenOptions}>
      <TabStack.Screen
        name="information"
        component={Information}
        options={{tabBarLabel: 'Inicio'}}
      />
      <TabStack.Screen
        name="my-pokemons"
        component={MyPokemons}
        options={{tabBarLabel: 'Mis pokemones'}}
      />
      <TabStack.Screen
        name="catch-it"
        component={CatchIt}
        options={{tabBarLabel: '¡Atrapalo ya!'}}
      />
    </TabStack.Navigator>
  );
}

export default HomeTabs;
