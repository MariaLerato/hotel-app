import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements';

const ConfirmPayment = ({navigation,route})=>{
    const number = route.params.number
    const name = route.params.name
    const date = route.params.date
    const cvv = route.params.cvv
    const price = route.params.price
    const Room = route.params.Room
    const guests = route.params.guests
    
    const PaymentCard = ()=>{
        return(
            <View style={{ width: '95%',borderRadius: 20,backgroundColor:'#1C5248',height:190,margin:'auto',padding:'auto',alignSelf:'center' }}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
                    <View style={{color:'white',padding:'4%',fontSize:25}}>
                        <Text style={{color:'white',fontSize:25}}>{name}</Text>
                        <Text  style={{color:'white',fontSize:17,paddingTop:'2%',paddingLeft:'1%',fontWeight:'100'}} >{number}</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',marginTop:'8%',marginRight:'4%'}}>
                        <View style={{borderRadius:40,backgroundColor:'#5190f5',width:40,height:40,marginRight:'-14%'}}></View>
                        <View  style={{borderRadius:40,backgroundColor:'#FAA455',width:40,height:40,marginRight:'12%'}}></View>
                    </View>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginLeft:'-24%'}}>
                   
                    <View style={{paddingLeft:'2%'}}>
                        <Text  style={{color:'white',fontSize:18,}}>Expired</Text>
                        <Text  style={{color:'white',fontSize:18,}}>{date}</Text>
                    </View>
                    <View style={{marginLeft:'-10%'}}>
                        <Text  style={{color:'white',fontSize:18}}>
                            Cvv
                        </Text>
                        <Text  style={{color:'white',fontSize:18}}>{cvv}</Text>
                    </View>
                </View>
                <Text  style={{color:'white',fontSize:17,alignSelf:'flex-end',fontWeight:'700',marginRight:'2%'}}>Visa</Text>
            </View>
        )
    }
    return(
        <>
        <View style={{marginTop:'10%'}}>
        <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#C4C4C4'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} />
                <Text style={Styles.textHead}>Payment </Text>
                <TouchableOpacity style={{alignItems:'center',alignSelf:'flex-end',width:'25%',marginLeft:'4%',marginTop:'0%'}} onPress={()=>navigation.navigate('payment')}><Text  style={{color:'#61B0A2',fontSize:20,paddingLeft:'10%'}} >Add New</Text></TouchableOpacity>
            </View>
            <View style={{ padding: '2%' }}>
                <PaymentCard />

            </View>
            <View style={{borderBottomWidth:1,borderBottomColor:'#C4C4C4',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',padding:'2%',marginTop:'2%'}}>
                <View>
                    <Text style={{color:'#C4C4C4',fontSize:18}}>Guest Name</Text>
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'2%',fontSize:20}}>{name}</Text>
                </View>
               
            </View>
            <View style={{borderBottomWidth:1,borderBottomColor:'#C4C4C4',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',padding:'2%'}}>
                <View>
                    <Text style={{color:'#C4C4C4',fontSize:18}}>JI,Makua - Johannesburg</Text>
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'2%',fontSize:20}}>Hotel Sandton Sun, {Room}</Text>
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
  
            <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',padding:'2%'}}>
                <View>
                    <Text style={{color:'#C4C4C4',fontSize:18}}>Total Price</Text>
                    <Text style={{ color:'#1C5248',fontWeight:'700',paddingLeft:'2%'}}>{guests} Rooms</Text>
                </View>
                <View style={{marginTop:'7%'}} >
                   
                    <Text style={{ color:'#06AC8E',fontWeight:'700',marginRight:'2%',fontSize:18}}>R {price} </Text>
                </View>
            </View>
            {/* <View style={{display:'flex',flexDirection:'row',margin:'2%',width:'100%',alignItems:'center'}}> */}
                <TouchableOpacity style={{  backgroundColor:'#75BFB2',width:'80%',height:60,justifyContent:'center',borderRadius:10,alignSelf:'center',marginTop:'10%'}} onPress={()=>navigation.navigate('message')}><Text style={{color:'white',fontSize:20,alignSelf:'center',fontWeight:'700'}}>Confirm Payment</Text></TouchableOpacity>
                {/* <TouchableOpacity style={{ backgroundColor:'#75BFB2',margin:'2%',width:'40%',justifyContent:'center',borderRadius:10}} onPress={()=>navigation.navigate('booking')}><Text style={{color:'white',fontSize:20,alignSelf:'center',fontWeight:'700'}}>Cancel</Text></TouchableOpacity> */}
            
        </View>
        </>
    )
}
const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%'
    },
    textHead: {
        color: '#1C5248',
        fontSize: 24,
        paddingLeft: '10%',
        fontWeight: '600',
        marginTop: '-1%',
        marginLeft:'15%'

    },
})
export default ConfirmPayment