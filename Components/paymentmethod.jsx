import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

const Method = () => {
    const [checked, setChecked] = useState('first')
    return (
        <View style={{ marginTop: '10%' }}>
            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#C4C4C4'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} />
                <Text style={Styles.textHead}>Payment Methods</Text>

            </View>
            <View style={{ padding: '2%' }}>
                <Image source={require('../assets/visa.jpg')} style={{ width: '98%', height: 250, borderRadius: 30 }} />

            </View>
            <View>
                <View style={Styles.touchable}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon name={'cc-mastercard'} type={'font-awesome-5'} size={30} color={'#64D3BF'} />
                        <Text style={{padding:'2%',fontSize:18,color:'#1C5248'}}> Credit/Debit Card </Text>
                    </View>
                    <RadioButton
                        value='first'
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '4%',margin:'1%', }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon name={'money-bill-alt'} type={'font-awesome-5'} size={30} color={'#64D3BF'} />
                        <Text style={{color:'#1C5248',padding:'2%'}}> EFT </Text>
                    </View>
                    <RadioButton
                        value='second'
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                </View>
                <Text style={{padding:'4%',textAlign:'center',fontSize:20,color:'#C4C4C4',marginTop:'1%'}}>Make Sure the details you provide are accurate,and can be used</Text>
                <TouchableOpacity style={{width:'80%',height:65,borderColor:'#61B0A2',borderWidth:4,borderRadius:40,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:'5%'}} onPress={()=>navigation.navigate('paymentmethod')}><Text style={{color:'#61B0A2',fontSize:24}}>Save</Text></TouchableOpacity>
            </View>
        </View>
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
        fontSize: 26,
        paddingLeft: '10%',
        fontWeight: '600',
        marginTop: '-2%'

    },
    touchable:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width:'98%',
        borderColor:'rgba(0,0,0,.2)',
        display: 'flex',
         flexDirection: 'row',
          justifyContent: 'space-between',
           padding: '4%',margin:'1%',borderBottomEndRadius:20,borderBottomLeftRadius:20,borderTopEndRadius:5
    }
})
export default Method