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
      url:"http://192.168.29.188:8000/fetchalluserorder",
      
    }).then((res)=>{
      console.log(res.data)
      setFooddata(res.data.data);
      //console.log('fooddate',fooddata)
    })
   },[])
  
    

        const deleteItem=async(orderId,id)=>{
            //Alert.alert(cart)
            console.log(orderId,id)
          //   await Axios({
          //     method:"delete",
          //     url:"http://192.168.1.176:8000/deleteUserorder",
          //     data:{
          //       "userId":"12",
          //       "orderId":""
          //     }
          //   }).then((res)=>{
          //     console.log(res)
          //  })
        }

        const  updateItem=(orderId,id)=>{
          console.log(orderId,id)
          Axios({
            method:"patch",
            url:"http://192.168.29.188:8000/updateUserpayment",
            data:{
               userId:id,
               orderId:orderId
            }
          }).then((res)=>{
            console.log(res.data)
            Alert.alert("Successfully Updated")
            Axios({
              method:"get",
              url:"http://192.168.29.188:8000/fetchalluserorder",
              
            }).then((res)=>{
              console.log(res.data)
              setFooddata(res.data.data);
            })
          })
          
        }
        
        const CardView=(props)=>{
           
          const id=props.id
          return(
              <View style={styles.card}>
              <View style={{ flex: 1 ,flexDirection:"column"}}>
              <View style={{ flex: 0.3, fontSize: 18, fontWeight: '60', flexDirection: 'column' }}>
              <Text style={{fontSize:25,textAlign:"center"}}>Order Id : {props.obj.orderId}{'\n'}</Text>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
              {props.obj.foodName.map((foodName, index) => (
                        <View key={index}>
                            <Text key={index}>{foodName}: {props.obj.quantity[index]} x {props.obj.rate[index]} = {props.obj.quantity[index] *props.obj.rate[index]}</Text>
                            <Text>{"\n"}</Text>
                        </View>
                        
                      ))}
              <Text>{'\n'}ItemTotal :{props.obj.totalAmount}</Text>
              <Text>{'\n\n'}Payment :{props.obj.payment}</Text>
              <Text>{'\n\n'}</Text>
              </Text>
              <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10 }}>
              <Button style={{  fontSize: 18, fontWeight: 'bold',backgroundColor:'red',width:"40%",height:"60%",margin:"5%" }} onPress={() =>deleteItem(props.obj.orderId,id)} >Delete</Button>
              <Button style={{  fontSize: 18, fontWeight: 'bold',backgroundColor:'green',width:"40%",height:"60%",color:'black'}} onPress={() =>updateItem(props.obj.orderId,id)} >Paid</Button>
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
        margin:3
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