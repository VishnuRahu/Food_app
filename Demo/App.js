import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Food from './Screens/FoodList';
import Admin from './Screens/AdminPage';
import AddItem from './Screens/AddItem';
import UpdateItem from './Screens/UpdateItem';
import BasketScreen from './Screens/cartPage';
import DeleteItem from './Screens/DeleteItem';
import orderPage from './Screens/orderPage';
import checkOrder from './Screens/checkorders';
import afterLogin from './Screens/afterLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="UpdateItem" component={UpdateItem} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} />
        <Stack.Screen name="DeleteItem" component={DeleteItem} />
        <Stack.Screen name="order" component={orderPage} />
        <Stack.Screen name="checkOrder" component={checkOrder} />
        <Stack.Screen name="afterLogin" component={afterLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


