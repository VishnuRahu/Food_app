import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AdminUpdateItem = () => {
  const [itemID, setItemID] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleUpdateItem = () => {

   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Item ID:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item ID"
        value={itemID}
        onChangeText={(text) => setItemID(text)}
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
