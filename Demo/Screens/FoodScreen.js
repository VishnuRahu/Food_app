import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '../Components/Button';
import { View,Text,StyleSheet,SafeAreaView, StatusBar, ScrollView, TouchableHighlight,Image,Alert} from 'react-native';

function FoodList(props) {

    const foodList = [  
        {
            title: 'Starters',
            foods: [
                {
                    foodId: 1,
                    foodName: 'Crispy Hot Wings',
                    rate: 'Rs:180',
                    qty: 0
                },
                {
                    foodId: 2,
                    foodName: 'Crispy Chicken Popcorn',
                    rate: 'Rs:50',
                    qty: 0
                }
            ]
        },
        {
            title: 'Starters 2',
            foods: [
                {
                    foodId: 3,
                    foodName: 'Crispy Hot Wings',
                    rate: 'Rs:180',
                    qty: 0
                },
                {
                    foodId: 4,
                    foodName: 'Crispy Chicken Popcorn',
                    rate: 'Rs:50',
                    qty: 0
                }
            ]
        },
        {
            title: 'Starters 3',
            foods: [
                {
                    foodId: 5,
                    foodName: 'Crispy Hot Wings',
                    rate: 'Rs:180',
                    qty: 0
                },
                {
                    foodId: 6,
                    foodName: 'Crispy Chicken Popcorn',
                    rate: 'Rs:50',
                    qty: 0
                },
                {
                    foodId: 7,
                    foodName: 'Crispy Hot Wings',
                    rate: 'Rs:180',
                    qty: 0
                },
                {
                    foodId: 8,
                    foodName: 'Crispy Chicken Popcorn',
                    rate: 'Rs:50',
                    qty: 0
                }
            ]
        },
        {
            title: 'Starters 4',
            foods: [
                {
                    foodId: 9,
                    foodName: 'Crispy Hot Wings',
                    rate: 'Rs:180',
                    qty: 0
                },
                {
                    foodId: 10,
                    foodName: 'Crispy Chicken Popcorn',
                    rate: 'Rs:50',
                    qty: 0
                },
                {
                    foodId: 11,
                    foodName: 'Crispy Hot Wings',
                    rate: 'Rs:180',
                    qty: 0
                },
                {
                    foodId: 12,
                    foodName: 'Crispy Chicken Popcorn',
                    rate: 'Rs:50',
                    qty: 0
                }
            ]
        }
    ]

    
    const alertfun=()=>{
        Alert.alert('order key pressed');
    }

    const [foodData, setFoodData] = useState(foodList);

    const incrementDecrementQty = (id, operation) => {

        console.log('id :'+ id + '/' + operation)
        const updateFoodQty = foodData.map( item => {
              let updateFoodList = item.foods.map(food => {
                if(food.foodId == id){
                    let qtyUpdate = (operation == 'increment') ? (food.qty + 1) : (food.qty - 1);
                    if(qtyUpdate<0){
                        qtyUpdate=0;
                    }
                    return {...food,qty:qtyUpdate};
                  }
                return food;
            });
            console.log(updateFoodList);
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
                    <Text style={{ padding: 7, fontSize: 18, fontWeight: 'bold', color: 'black' }}>{props.obj.qty}</Text>
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