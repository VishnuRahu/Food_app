import * as React from 'react';
import { View, Text,StyleSheet,Dimensions,Image,TouchableHighlight } from 'react-native';
import Axios from "axios";
import TextInput from '../Components/TextInput';
import Button from '../Components/Button'

const Login=({navigation})=> {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit=()=>{
    Axios({
      method:"post",
      url:"http://192.168.29.188:8000/login",
      data:{
        email:email,
        password:password
      }
      }).then((res)=>{
        alert(res.data);
        console.log(res.data);
         if(res.data=="admin"){
          navigation.navigate("Admin");
         } 
         else if(res.data=='Successfull'){
          navigation.navigate("Food");
         }
         
      }).catch((error) => {
        console.error(error);
    });

    
  };

  

  return (
    <View style={styles.container}>           
                <Image  style={styles.image} source={require('../assets/delivery.jpg')}></Image>
                <View style={styles.inputView}>
                        <TextInput  autoCapitalize="none"
                          autoCompleteType="email"
                          textContentType="emailAddress"
                          keyboardType="email-address"
                                        
                                      placeholder="Email id "  
                                      onChangeText={newText => setEmail(newText)} 
                      />
                </View>
                  
                <View style={styles.inputView}>
                    <TextInput secureTextEntry 
                                    
                                    placeholder="Password"  
                                    
                                    onChangeText={newText => setPassword(newText)} 
                    />
                </View>

                <Button mode="contained" onPress={()=>handleSubmit()}>
                  Login
                </Button>
                  
          
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:250,
    height:250,
    marginBottom:30
  },
  inputView: {
    backgroundColor:"grey",
    borderRadius: 30,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    padding: 20,
    justifyContent:"center"
  },
  card: {
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    width:"80%",
    height:"80%",
    alignItems:"center",
    justifyContent:"center"
  }
});

export  default Login;

