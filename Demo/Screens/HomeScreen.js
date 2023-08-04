import * as React from 'react';
import {View, Text, ImageBackground,StyleSheet } from 'react-native';
import Button from '../Components/Button'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen=({ navigation })=> {
  return (
      <ImageBackground style={styles.background} source={require("../assets/download.jpg")}>
      <View >
        <Button style={styles.login_but} onPress={()=>navigation.navigate("Login")}>Login</Button>
        <Button style={styles.login_but}onPress={()=>navigation.navigate("Register")}>Register</Button>
       </View>
      </ImageBackground>
  );
}

const styles=StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end"
    },
    loginbutton:{
        width:"100%",
        heigth:70,
        paddingEnd:60,
        backgroundColor:"#fff"
    },
    login_but:{
        backgroundColor:"white",
        fontSize:"20",
    }
})

export  default HomeScreen;