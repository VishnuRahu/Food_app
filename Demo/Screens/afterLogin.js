// Create a MenuBar.js component

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/FoodList';
import ProfileScreen from '../Screens/cartPage';

const Tab = createBottomTabNavigator();

const MenuBar = ({route})=> {
  const userId=route.params.email
  return (
    <Tab.Navigator>
      <Tab.Screen name="Order" component={HomeScreen}  initialParams={{ userId: userId }} />
      <Tab.Screen name="View Cart" component={ProfileScreen} initialParams={{ userId: userId }}/>
    </Tab.Navigator>
  );
}

export default MenuBar;
