import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import Axios from 'axios';

const AdminAddItem = () => {
  const [itemID, setItemID] = useState('');
  const [itemName, setItemName] = useState('');
  const [title,setTitle]=useState('');

  const handleDeleteItem = () => {
     Axios({
      method:"delete",
      url:"http://192.168.1.176:8000/deleteItem",
      data:{
        title:title,
        foodId:itemID,
        foodName:itemName
      }
     }).then((res)=>{
      Alert.alert('Item Deleted Successfully')
     })
  };
 
  

  return (
    <View style={styles.container}>
     <Text style={styles.label}>Item Category:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item Category"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Item ID:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item ID"
        value={itemID}
        onChangeText={(text) => setItemID(text)}
      />

      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />

      <Button
        title="Delete Item"
        onPress={handleDeleteItem}
        style={styles.button}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', 
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default AdminAddItem;

