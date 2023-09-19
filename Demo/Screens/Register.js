import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import Axios from "axios";
import TextInput from '../Components/TextInput';
import Button from '../Components/Button'


const Register=({ navigation })=> {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phoneno, setPhoneno] = React.useState('');
  const [name, setName] = React.useState('');

  const handleSubmit=()=>{
    Axios({
      method:"post",
      url:"https://friends-meal.onrender.com/adduser",
      data:{
        name:name,
        email:email,
        password:password,
        phoneNo:phoneno
      }
      }).then((res)=>{
         alert(res.data);
      }).catch((error) => {
        console.error(error);
    });

    
  };

  

  return (
    <View style={styles.container}>
    
      <View style={styles.inputView}>
            <TextInput  
                             
                            placeholder="Name"  
                            onChangeText={newText => setName(newText)} 
            />
      </View> 
       
    <View style={styles.inputView}>
        <TextInput  
                          
                        placeholder="Email id "  
                        onChangeText={newText => setEmail(newText)} 
        />
    </View>
       
    <View style={styles.inputView}>
    <TextInput  
                   
                    placeholder="Password" required 
                    onChangeText={newText => setPassword(newText)} 
     />
    </View >   
     

    <View style={styles.inputView}>
    <TextInput  
                      
                    placeholder="PhoneNO"  
                    onChangeText={newText => setPhoneno(newText)} 
     />
    </View> 
       
    <Button mode="contained" onPress={handleSubmit}>
                  Register
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
      padding: 10,
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

export  default Register;

