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
      url:"http://192.168.29.188:8000/fetchuserCart",
      data:{
        userId:"12"
      }
    }).then((res)=>{
      console.log(res.data)
      setFooddata(res.data.data);
    })
   },[])

    // const fooddata = [  
    //         {
    //             u_id: '12',
    //             foods: [
    //                 {
    //                     cartId: 1,
    //                     foodName: ['Crispy Hot Wings','Crispy Chicken Popcorn'],
    //                     rate: [180,221],
    //                     qty: [1,2]
    //                 },
    //                 {
    //                     cartId: 2,
    //                     foodName: ['Crispy Hot Wings','Crispy Chicken Popcorn'],
    //                     rate: [180,221],
    //                     qty: [1,2]
    //                 },
    //             ]
    //         },
    //     ]

        const deletedata=()=>{
            Alert.alert('delete key pressed')
        }
    
        const CardView=(props)=>{
            return(
                <View style={styles.card}>
                <View style={{ flex: 1 ,flexDirection:"column"}}>
                    
                <Text style={{ flex: 0.3, fontSize: 18, fontWeight: '600', flexDirection: 'column' }}>
                {props.obj.foodName.map((foodName, index) => (
                    <Text key={index}>{foodName}:{props.obj.rate[index]}{'\n'}</Text>
                ))}
                </Text>
                {/* <Text style={{borderBottomColor: 'black',borderBottomWidth: StyleSheet.hairlineWidth}}/> */}

                    {/* <Text style={{ flex:0.3,fontSize: 18, fontWeight: '600',flexDirection:'column' }}>{
                    props.obj.foodName+":"+props.obj.rate}</Text>  */}

                    {/* <Text style={{ flex:0.3,fontSize: 18, fontWeight: '600',flexDirection:'column' }}>{
                    props.obj.rate}</Text>            */}
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10 }}>
                    <Button onPress={()=>deletedata()}>Delete</Button>
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