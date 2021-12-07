import React from 'react';
import {View,Text,ImageBackground,StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';

const Confirm = ({navigation})=>{
    return(
        <View style={{marginTop:'10%'}}>
        <View style={Styles.header}>
            <Icon name={'arrow-back'} color={'#1C5248'} style={{fontWeight:'700',marginTop:'20%'}} onPress={()=>navigation.goBack()} />
            <Text style={Styles.textHead}>Booking</Text>
        </View>
        <View style={{alignItems:'center',padding:'3%',borderRadius:20}}>
            <ImageBackground source={require('../assets/pretoria.png')} style={{width:'100%',height:200,borderRightRadius:50}}>
                <View style={Styles.textContainer}>
                    <Text style={{color:'#C4C4C4',fontSize:20}}>JI, Makua -Johannesburg</Text>
                    <Text style={{color:'#1C5248',fontSize:22,fontWeight:'700'}}>Hotel Sandton Sun, Room A</Text>
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
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'2%'}}>9xNights, 5Rooms</Text>
                </View>
                <View style={{marginTop:'7%'}} >
                   
                    <Text style={{ color:'#06AC8E',fontWeight:'700',paddingLeft:'-2%'}}>R10040.00</Text>
                </View>
            </View>
            <View style={{display:'flex',flexDirection:'row',margin:'2%',width:'100%'}}>
                <TouchableOpacity style={{  backgroundColor:'#75BFB2',margin:'2%',width:'50%',height:60,justifyContent:'center',borderRadius:10}} onPress={()=>navigation.navigate('payment')}><Text style={{color:'white',fontSize:20,alignSelf:'center',fontWeight:'700'}}>Confirm Booking</Text></TouchableOpacity>
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
        padding:'2%'
      },
    textHead:{
        color:'#1C5248',
        fontSize:24,
        paddingLeft:'15%',
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