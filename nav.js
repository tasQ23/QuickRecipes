import React from 'react';
import {
  StackNavigator, TabNavigator
} from 'react-navigation';
import {Icon} from 'react-native-elements';
import App from './App';
import Breakfast from './breakfast';

export const Tabs=TabNavigator({
App:{
screen:App,
},
Breakfast:{
screen:Breakfast,
}
});