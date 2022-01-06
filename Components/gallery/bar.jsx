import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { img } from './reusables';

const Bar = ({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('hotelrooms')} style={styles.container}>
        <ImageBackground source={img.bar} style={{width:'100%',height:'100%'}}>
            <Text style={styles.text}>3/3</Text>
        </ImageBackground>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    },
    text:{
        color:'white',
        fontSize:24,
        alignSelf:'center',
        marginTop:'auto'
    }
})
export default Bar