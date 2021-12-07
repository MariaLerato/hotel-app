import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {Icon,Input} from 'react-native-elements'

const PaymentMethod = ({navigation})=>{
    return(
        <>
        <View  style={{marginTop:'10%'}}>
            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#C4C4C4'} style={{fontWeight:'700',marginTop:'20%'}} onPress={()=>navigation.goBack()} />
                <Text style={Styles.textHead}>Payment Methods</Text>
                <TouchableOpacity style={{borderColor:'#1C5248',borderWidth:2,borderRadius:40,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',width:'15%',marginLeft:'4%'}} onPress={()=>navigation.navigate('paymentmethod')}><Text  style={{color:'#61B0A2',fontSize:15}} >Skip</Text></TouchableOpacity>
            </View>
            <View style={{marginTop:'20%'}}>
                <Input
                placeholder={'Card Number'}
                leftIcon={<Icon name={'cc-mastercard'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                />
                  <Input
                placeholder={'Card Holder'}
                leftIcon={<Icon name={'user'} type={'font-awesome-5'} size={30} color={'#6DA399'}/>}
                style={Styles.textbox}
                />
                  <Input
                placeholder={'Expiry Date'}
                leftIcon={<Icon name={'calendar'} type={'font-awesome-5'} size={30} color={'#6DA399'}/>}
                style={Styles.textbox}
                />
                  <Input
                placeholder={'CVV'}
                leftIcon={<Icon name={'credit-card'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                />
                
            </View>
            <TouchableOpacity style={{width:'80%',height:65,borderColor:'#61B0A2',borderWidth:4,borderRadius:40,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:'10%'}} onPress={()=>navigation.navigate('paymentmethod')}><Text style={{color:'#61B0A2',fontSize:24}}>Save</Text></TouchableOpacity>
           
        </View>
        </>
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
        fontSize:28,
        paddingLeft:'10%',
        fontWeight:'600',
        marginTop:'-2%'
      
      },
      textbox:{
        margin:'2%'
      }
})
export default PaymentMethod