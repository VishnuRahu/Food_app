import React, { useState,useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '../Components/Button';
import Axios from 'axios';
import { View,Text,StyleSheet,SafeAreaView, StatusBar, ScrollView,Image,Alert} from 'react-native';

function FoodList({navigation}) {


    var count1=0;
    const [foodList, setFoodList] = useState([]);
    
    
    const [foodData, setFoodData] = useState([]);
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
    //console.log('food list from the use effect',foodList.length)
    
    const alertfun=()=>{
        Alert.alert('order key pressed')
        navigation.navigate("BasketScreen")  
        
    }

    const incrementDecrementQty = (id, operation) => {
        
        const updateFoodQty = foodData.map( item => {
              let updateFoodList = item.foods.map(food => {
                let count=0;
                let qtyUpdate=0;
                if(food.foodId == id){
                    if(qtyUpdate>parseInt(food.qty)){
                        Alert.alert("sorry stock exceeded")
                        qtyUpdate=parseInt(food.qty);
                    }
                    else{
                       qtyUpdate = (operation == 'increment') ? (count + 1) : (count - 1);    
                    }
                    
                    if(qtyUpdate<0){
                        qtyUpdate=0;
                    }
                    
                    return {...food,qty:qtyUpdate};
                  }
                return food;
            });
            console.log('updated food list',updateFoodList);
            return {...item,foods:updateFoodList}

        }
        );
        setFoodData(updateFoodQty);
        //console.log(updateFoodQty);
      }

    const Food = (props) => {
        return (
                <View style={styles.card}>
                <View style={{ flex: 0.7 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>{props.obj.foodName}</Text>
                    <Text style={{ fontSize: 15 }}>{props.obj.rate}</Text>
                    
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row', borderWidth: 1, justifyContent: 'space-around', borderRadius: 10 }}>
                    <Text style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }} onPress={() => incrementDecrementQty(props.obj.foodId, 'increment')} >+</Text>
                    <Text style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }}>{count1}</Text>
                    <Text style={{ padding: 7, fontSize: 19, fontWeight: 'bold', color: 'black' }} onPress={() => incrementDecrementQty(props.obj.foodId, 'decrement')}>-</Text>
                </View>
                </View>
            )}

    return (
        <View style={styles.parent}>
        <ScrollView  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            {foodData.map((item,index) =>
                <View key={index}>
                    <Text style={{fontSize:22,color:'black',marginTop:20,marginBottom:5,fontWeight:'700'}}>{item.title}</Text>
                    {item.foods.map((food,index)=>
                        <Food key={food.foodId} obj={food}></Food>
                    )}
                </View>
                
                )}
        </ScrollView>
        <View style={styles.but}>
             <Button onPress={()=>alertfun()}>Order</Button>
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

export default FoodList;