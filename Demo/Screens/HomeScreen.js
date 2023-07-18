import * as React from 'react';
import { Button,View, Text, ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen=({ navigation })=> {
  return (
      <ImageBackground style={styles.background} source={require("../assets/images.jpg")}>
      <View >
        <Button style={styles.loginbutton} title="Login" onPress={()=>navigation.navigate("Login")}/>
        <Button  title="Register" onPress={()=>navigation.navigate("Register")}/>
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
    }
})

export  default HomeScreen;