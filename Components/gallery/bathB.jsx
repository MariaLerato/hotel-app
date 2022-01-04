import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,StyleSheet} from 'react-native'

const BathB = ({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('rooms')} style={styles.container}>
        <ImageBackground source={require('../../assets/bath2Full.png')} style={{width:'100%',height:'100%'}}>
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
        marginTop:'170%'
    }
})
export default BathB