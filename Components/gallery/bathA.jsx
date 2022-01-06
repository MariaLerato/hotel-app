import React from 'react';
import {View,Image,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native'

const BathA = ({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('bar')} style={styles.container}>
        <ImageBackground source={require('../../assets/bathFull.png')} style={{width:'100%',height:'100%'}}>
            <Text style={styles.text}>2/3</Text>
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
export default BathA