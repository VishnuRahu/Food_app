import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Axios from 'axios';

const AdminAddItem = () => {
  const [itemID, setItemID] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [title,setTitle]=useState('');

  const handleAddItem = () => {
     Axios({
      method:"post",
      url:"http://192.168.1.105:8000/addItem",
      data:{
        foodId:itemID,
        title:title,
        foodName:itemName,
        rate:itemPrice,
        qty:itemQuantity
      }
     }).then((res)=>{
      Alert.alert('Item added Successfully');
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

      <Text style={styles.label}>Item Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item price"
        value={itemPrice}
        onChangeText={(text) => setItemPrice(text)}
      />
      <Text style={styles.label}>Item Quantity:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item quantity"
        value={itemQuantity}
        onChangeText={(text) => setItemQuantity(text)}
      />

      <Button
        title="Add Item"
        onPress={handleAddItem}
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

