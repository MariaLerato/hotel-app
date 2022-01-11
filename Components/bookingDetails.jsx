import React from 'react';
import {View,Text,ImageBackground,StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';

const Confirm = ({navigation,route})=>{
    const name = route.params.name
    const total = route.params.total
    const about = route.params.about
    const number = route.params.number
    const main = route.params.main
    let price = number * total
    const TotalPrice = ()=>{
     
        return (
            <Text>
               R {price}
            </Text>
        )
    }
    
    console.log('Total',TotalPrice)
    
    return(
        <View style={{marginTop:'5%',flex:1}}>
        <TouchableOpacity style={Styles.header} onPress={()=>navigation.goBack()}>
            <Icon name={'arrow-back'} color={'#1C5248'} style={{fontWeight:'700'}}  />
            <Text style={Styles.textHead}>Booking</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',padding:'2%',borderRadius:20,paddingTop:'-2%'}}>
            <ImageBackground source={main} style={{width:'100%',height:200,borderRadius:40,overflow:'hidden'}}>
                <View style={Styles.textContainer}>
                    <Text style={{color:'#C4C4C4',fontSize:20}}>JI, Makua -Johannesburg</Text>
                    <Text style={{color:'#1C5248',fontSize:22,fontWeight:'700'}}>Hotel Sandton Sun, {name}</Text>
                </View>
            </ImageBackground>
            <View style={{alignItems:'flex-start',width:'100%'}}>
                <Text style={{color:'#A9A3A3',alignSelf:'center',fontSize:22,width:'100%'}}>Facility</Text>
            </View>
            
            <View style={{display:'flex',flexDirection:'row',width:'100%',alignSelf:'center',padding:'4%'}}>
               
                <View style={{display:'flex',flexDirection:'row',}}>
                  <Icon name={'wifi'} size={28} color='#1C5248' />
                  <Text style={{color:'#1C5248',fontSize:18,paddingLeft:'2%'}}>Free Wifi</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',paddingLeft:'6%'}}>
                    <Icon name={'bath'} type={'font-awesome'}  color='#1C5248'/>
                    <Text style={{color:'#1C5248',fontSize:18,paddingLeft:'2%'}}>Bathtub</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',paddingLeft:'6%'}}>
                    <Icon name={'tv'}  color='#1C5248'/>
                    <Text style={{color:'#1C5248',fontSize:18,paddingLeft:'2%'}}>TV</Text>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderBottomColor:'#C4C4C4',width:'100%',display:'flex',flexDirection:'row'}}>
                <View style={{display:'flex',flexDirection:'row',padding:'2%'}}>
                    <Icon name={'bread-slice'} type={'font-awesome-5'}  color='#1C5248'/>
                    <Text style={{color:'#1C5248',fontSize:18,paddingLeft:'2%'}}>Free Breakfast</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',padding:'2%'}}>
                    <Icon name={'swimming-pool'} type={'font-awesome-5'}  color='#1C5248'/>
                    <Text style={{color:'#1C5248',fontSize:18,paddingLeft:'2%'}}>Outdoor Pool</Text>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderBottomColor:'#C4C4C4',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',padding:'2%'}}>
                <View>
                    <Text style={{color:'#C4C4C4',fontSize:18}}>Check In</Text>
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'2%'}}>Thu, 02 Dec 2021</Text>
                </View>
                <View >
                    <Text  style={{color:'#C4C4C4',fontSize:18}}>Check Out</Text>
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'-2%'}}>Fri,10 Dec 2021</Text>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderBottomColor:'#C4C4C4',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',padding:'2%'}}>
                <View>
                    <Text style={{color:'#C4C4C4',fontSize:18}}>Guest Name</Text>
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'2%',fontSize:20}}>Maria Fenyane</Text>
                </View>
               
            </View>
            <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',padding:'2%'}}>
                <View>
                    <Text style={{color:'#C4C4C4',fontSize:18}}>Total Price</Text>
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'2%'}}>9xNights, {number} Rooms</Text>
                </View>
                <View style={{marginTop:'7%'}} >
                   
                    <Text style={{ color:'#06AC8E',fontWeight:'700',paddingLeft:'-2%'}}>
                     <TotalPrice/>
                    </Text>
                </View>
            </View>
            <View style={{display:'flex',flexDirection:'row',margin:'2%',width:'100%',marginBottom:'2%'}}>
                <TouchableOpacity style={{  backgroundColor:'#75BFB2',margin:'2%',width:'50%',height:60,justifyContent:'center',borderRadius:10}} onPress={()=>navigation.navigate('payment',{
                    Totalprice:price,
                    Roomname:name,
                    Guestnumber:number,

                })}><Text style={{color:'white',fontSize:20,alignSelf:'center',fontWeight:'700'}}>Confirm Booking</Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor:'#75BFB2',margin:'2%',width:'40%',justifyContent:'center',borderRadius:10}} onPress={()=>navigation.navigate('booking')}><Text style={{color:'white',fontSize:20,alignSelf:'center',fontWeight:'700'}}>Cancel</Text></TouchableOpacity>
            </View>

        </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        padding:'2%',marginTop:'1%'
      },
    textHead:{
        color:'#1C5248',
        fontSize:24,
        paddingLeft:'18%',
        fontWeight:'700',
      
      },
      textContainer:{
          backgroundColor:'white',
          width:'90%',
          height:90,
          alignSelf:'center',
          justifyContent:'center',
          marginTop:'25%',
          padding:'4%',
          borderRadius:20
      }
})
export default Confirm