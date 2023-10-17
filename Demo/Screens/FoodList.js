import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import Button from '../Components/Button';
import { View,Text,StyleSheet,SafeAreaView, StatusBar, ScrollView,Image,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Food = ({ item }) => {

    const [count, setCount] = useState(0);  
    const countHandler = async (available, value) => {
  
      if(value < 0){
        alert('invalid quantity')
        return false;
      } else if( value === 0){
        setCount(value)
        await AsyncStorage.removeItem(`${item.foodName}`);
      } else if(value > available){
        alert('stock not available')
        return false;
      } else {
        setCount(value)
        await AsyncStorage.setItem(`${item.foodName}`, `${value}`);
        return true;
      }
    }
    
    return (
      <>
        <View style={styles.card}>
            <View style={{ flex: 0.7 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.foodName}</Text>
                <Text style={{ fontSize: 15 }}>{item.rate}</Text>
                
            </View>
            <View style={{ flex: 0.3, flexDirection: 'row', borderWidth: 1, justifyContent: 'space-around', borderRadius: 10 }}>
                <Text style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }} onPress={() => {countHandler(item.qty, count + 1)}} > + </Text>
                <Text style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }}> {count} </Text>
                <Text style={{ padding: 7, fontSize: 19, fontWeight: 'bold', color: 'black' }} onPress={() => {{countHandler(item.qty, count - 1)}}}> - </Text>
            </View>
        </View>
      </>
    );
  }

function FoodList1({navigation}) {

    const [foodData, setFoodData] = useState([]);

    const submitHandler = async () => {

      let orderedItems = [];
      let foodsordered=[];
      let qty=[];
      let rate=[];
      for(let i = 0; i<foodData.length; i++){
        let items = foodData[i].foods;
        for(let j = 0; j < items.length; j++){
          let available =  items[j].qty;
          let ordered = await AsyncStorage.getItem(`${items[j].foodName}`);
          if(ordered){
            orderedItems.push({
              foodName: items[j].foodName,
              available_qty: available,
              ordered_qty: ordered
            })
            //AsyncStorage.removeItem(`${items[j].foodName}`);
            foodsordered.push(items[j].foodName);
            qty.push(parseInt(ordered));
            rate.push(items[j].rate)
            console.log('foodsordered',foodsordered);
            console.log('qty',qty);
            console.log('rate',rate)
          }
        }
      }
      await Axios({
        method:"post",
        url:"http://192.168.1.176:8000/adduserCart",
        data:{
          userId:"12",
          cartId:5,
          foodName:foodsordered,
          rate:rate,
          qty:qty
        }
      }).then((res)=>{
        console.log(res.data)
      })
      //alert(JSON.stringify({ data : orderedItems}))
      //AsyncStorage.removeItem(`${items[j].foodName}`);
      //AsyncStorage.clear();
      navigation.navigate("BasketScreen")
    }

    useEffect(()=>{
        Axios({
            method:"get",
            url:"http://192.168.1.176:8000/getfood",
            }).then((res)=>{
                setFoodData(res.data.data); 
            }).catch((error) => {
                console.error(error);
            });
            
    },[])

    useEffect(() => {
      setFoodData([...foodData]);

      return( async () => {
        await AsyncStorage.clear()
      })
    }, [])

    return (
        <View style={styles.parent}>
        <ScrollView  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            {foodData.map((item,index) =>
                <View key={index}>
                    <Text style={{fontSize:22,color:'black',marginTop:20,marginBottom:5,fontWeight:'700'}}>{item.title}</Text>
                    {item.foods.map((food,index)=>
                        <Food key={index} item={food} />
                    )}
                </View>
                
                )}
        </ScrollView>
        <View style={styles.but}>
             <Button onPress={() => submitHandler()}>Order</Button>
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
        margin:15,
        maxHeight:'100%'
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
        maxHeight: '20%',
        width: '96%',
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

export default FoodList1;