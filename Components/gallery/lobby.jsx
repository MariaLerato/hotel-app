import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { img } from './reusables';

const Lobby = ({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('hotelrooms')} style={styles.container}>
        <ImageBackground source={img.lobby} style={{width:'100%',height:'100%'}}>
            <Text style={styles.text}>2
            /2</Text>
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
export default Lobby