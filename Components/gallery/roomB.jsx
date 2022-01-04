import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'

const RoomB = ({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('bathB')} style={styles.container}>
        <ImageBackground source={require('../../assets/firePlace.png')} style={{width:'100%',height:'100%'}}>
            <Text style={styles.text}>1/2</Text>
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
        marginTop:'170%'
    }
})
export default RoomB