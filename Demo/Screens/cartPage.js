import React, { useState,useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '../Components/Button';
import Axios from 'axios';
import { View,Text,StyleSheet,SafeAreaView, StatusBar, ScrollView, TouchableHighlight,Image,Alert} from 'react-native';

  
const BasketScreen=()=>{

  const [fooddata,setFooddata]=useState([]);
  const [Itemtotal,setItem]=useState();


   useEffect(()=>{
    Axios({
      method:"post",
      url:"http://192.168.29.188:8000/fetchuserCart",
      data:{
        userId:"12"
      }
    }).then((res)=>{
      console.log(res.data)
      setFooddata(res.data.data);
    })
   },[])
  
    

        const deleteItem=async(cart)=>{
            //Alert.alert(cart)
            await Axios({
              method:"delete",
              url:"http://192.168.29.188:8000/deleteusercart",
              data:{
                "userId":"12",
                "cartId":cart
              }
            }).then((res)=>{
              //console.log(res)
              
              const updatedData = fooddata.map((item) => {
                if (item.foods) {
                  const filteredFoods = item.foods.filter((food) => food.cartId !== cart);
                  return { ...item, foods: filteredFoods };
                }
                return item;
              });
              setFooddata(updatedData);
              

            })
            
        }
        
        const CardView=(props)=>{
          const { foodName, qty, rate } = props.obj;

            // Calculate the total for this item
            const itemTotal = foodName.reduce((total, _, index) => {
              return total + qty[index] * rate[index];
            }, 0);
          return(
              <View style={styles.card}>
              <View style={{ flex: 1 ,flexDirection:"column"}}>
              <View style={{ flex: 0.3, fontSize: 18, fontWeight: '600', flexDirection: 'column' }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
              {props.obj.foodName.map((foodName, index) => (
                        <View key={index}>
                            <Text key={index}>{foodName}: {props.obj.qty[index]} x {props.obj.rate[index]} = {props.obj.qty[index] *props.obj.rate[index]}</Text>
                        </View>
                      ))}
              <Text>ItemTotal:{itemTotal}</Text>
              </Text>
              <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10 }}>
              <Button style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }} onPress={() =>deleteItem(props.obj.cartId)} >Delete</Button>
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
              <Text key={index}>{item.u_id}</Text>
              {item.foods.map((food,index)=>
                      <CardView key={food.cartId} obj={food}></CardView>
                  )}
          </View>
              
              )}
      </ScrollView>
      <View style={styles.but}>
           <Button >Place Order</Button>
      </View>
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