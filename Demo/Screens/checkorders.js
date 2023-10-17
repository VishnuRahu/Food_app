import React, { useState,useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '../Components/Button';
import Axios from 'axios';
import { View,Text,StyleSheet,SafeAreaView, StatusBar, ScrollView, TouchableHighlight,Image,Alert} from 'react-native';

  
const BasketScreen=({navigation})=>{

  const [fooddata,setFooddata]=useState([]);
  const [Itemtotal,setItem]=useState();


   useEffect(()=>{
    Axios({
      method:"get",
      url:"http://192.168.1.105:8000/fetchalluserorder",
      
    }).then((res)=>{
      console.log(res.data)
      setFooddata(res.data.data);
      //console.log('fooddate',fooddata)
    })
   },[])
  
    

        const deleteItem=async(orderId,id)=>{
            //Alert.alert(cart)
            // await Axios({
            //   method:"delete",
            //   url:"http://192.168.1.176:8000/deleteusercart",
            //   data:{
            //     "userId":"12",
            //     "cartId":cart
            //   }
            // }).then((res)=>{
            //   //console.log(res)
              
            // const updatedData = fooddata.map((item) => {
            //     if (item.foods) {
            //       const filteredFoods = item.foods.filter((food) => food.cartId !== cart);
            //       return { ...item, foods: filteredFoods };
            //     }
            //     return item;
            //   });
            //   setFooddata(updatedData);
              

            // })
            Alert.alert(orderId)
            Alert.alert(id)
        }
        
        const CardView=(props)=>{
          
          return(
              <View style={styles.card}>
              <View style={{ flex: 1 ,flexDirection:"column"}}>
              <View style={{ flex: 0.3, fontSize: 18, fontWeight: '600', flexDirection: 'column' }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
              {props.obj.foodName.map((foodName, index) => (
                        <View key={index}>
                            <Text key={index}>{foodName}: {props.obj.quantity[index]} x {props.obj.rate[index]} = {props.obj.quantity[index] *props.obj.rate[index]}</Text>
                            <Text>{"\n"}</Text>
                        </View>
                        
                      ))}
              <Text>{'\n\n'}ItemTotal :{props.obj.totalAmount}</Text>
              <Text>{'\n\n'}Payment :{props.obj.payment}</Text>
              </Text>
              <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10 }}>
              <Button style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }} onPress={() =>deleteItem(props.obj.orderId,props.id.userId)} >Delete</Button>
              <Button style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }} onPress={() =>updateItem(props.obj.orderId,props.id.userId)} >Update to Paid</Button>
              </View>
        
    </View>
              
              
              </View>
              </View>
          );
      }




  return(
      <View style={styles.parent}>
      <ScrollView  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          {fooddata.map((item,index) =>
          <View key={index}>
              {item.foodsOrdered.map((food,index)=>
                      <CardView key={food.orderId} obj={food} id={item.userId}></CardView>
                  )}
          </View>
              
              )}
      </ScrollView>
      
      </View>
  );
              }
        



const styles = StyleSheet.create({
    textMedium: {
        fontFamily: 'Roboto-Medium',
      },
      parent: {
        flex:1,
        alignContent:'center',
        margin:15
      },
      scroll:{
        padding:10,
        flex:1
      },
      but:{
        backgroundColor: 'grey',
        height:'10%',
        borderRadius:10
      },
      card: {
        minHeight: '12%',
        width: '98%',
        borderWidth:1,
        borderColor:'black',
        backgroundColor: 'white',
        justifyContent:'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        padding: 13,
        margin:6
      },
      viewOuter : {
        flexDirection: 'row'
      },
      foodname : {
        color:'black',
        fontSize:20
      },
      quantity : {
        fontSize:20,
        fontWeight: '700',
        color:'black'
      },
      margin : {
        margin: 10
      },
      result : {
        top:20,
        flexDirection: 'row'
      }
})

export default BasketScreen;