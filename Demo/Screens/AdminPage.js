import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Alert } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';




const Admin=({ navigation })=> {
  const [items, setItems] = React.useState([
    { name: 'Add Item', code: '#1abc9c' },
    { name: 'Update Item', code: '#2ecc71' },
    { name: 'Delete Item', code: '#3498db' },
    { name: 'Check orders', code: '#9b59b6' },
    
  ]);

  showAlert =(name)=> {
    Alert.alert(
     'Alert Title',
     `The user name is:${name}`,
     [
       {text: 'OK', onPress: () => console.log('OK Pressed')},
     ],
     { cancelable: false }
     
   )
   if(name=='Add Item'){
    navigation.navigate("AddItem")  
   }
   else if(name=="Update Item"){
    navigation.navigate("UpdateItem")   
   }
  }

  return (
    
    
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={15}
      renderItem={({ item }) => (
        <TouchableOpacity  onPress={() => this.showAlert(item.name)}>
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
                  </View>
          </TouchableOpacity>
      )}
      
    />
    
    
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop:"50%",
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
export  default Admin;