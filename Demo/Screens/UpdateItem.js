import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import Axios from 'axios';

const AdminUpdateItem = () => {
  const [item, setItem] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemName, setItemName] = useState('');

  const handleUpdateItem = () => {
    Axios({
      method:"patch",
      url:"http://192.168.1.176:8000/updateQty",
      data:{
        title:item,
        foodName:itemName,
        rate:itemPrice,
        qty:itemQuantity
      }
     }).then((res)=>{
      Alert.alert('Successfully updated');
     })
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Item Category:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item Category"
        value={item}
        onChangeText={(text) => setItem(text)}
      />

    <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item Name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />

      <Text style={styles.label}>Item Quantity:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item Quantity"
        value={itemQuantity}
        onChangeText={(text) => setItemQuantity(text)}
      />

      <Text style={styles.label}>Item Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item price"
        value={itemPrice}
        onChangeText={(text) => setItemPrice(text)}
      />

      <Button
        title="Update Item"
        onPress={handleUpdateItem}
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

export default AdminUpdateItem;
