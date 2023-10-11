import React, { useState,useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '../Components/Button';
import Axios from 'axios';
import { View,Text,StyleSheet,SafeAreaView, StatusBar, ScrollView, TouchableHighlight,Image,Alert} from 'react-native';

  



const BasketScreen=()=>{

  const [fooddata,setFooddata]=useState([]);

   useEffect(()=>{
    Axios({
      method:"post",
      url:"http://192.168.1.176:8000/fetchuserCart",
      data:{
        userId:"12"
      }
    }).then((res)=>{
      console.log(res.data)
      setFooddata(res.data.data);
    })
   },[])

    

        const deleteItem=(cart)=>{
            Alert.alert(cart)
            Axios({
              method:"post",
              url:"http://192.168.1.176:8000/fetchuserCart",
              data:{
                "userId":"12",
                "cartId":cart
              }
            })
        }
    
        const CardView=(props)=>{
            return(
                <View style={styles.card}>
                <View style={{ flex: 1 ,flexDirection:"column"}}>
                <View style={{ flex: 0.3, fontSize: 18, fontWeight: '600', flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>
                {props.obj.foodName.map((foodName, index) => (
                          <Text>{foodName}</Text>
                      ))}
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
                <Text>{item.u_id}</Text>
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