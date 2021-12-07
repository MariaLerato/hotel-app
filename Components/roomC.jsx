import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,StyleSheet} from 'react-native'

const RoomC = ({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('bathC')} style={styles.container}>
            <ImageBackground source={require('../assets/whitebed.png')} style={{width:'100%',height:'100%'}}>
                <Text style={styles.text}>1/3</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    
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
export default RoomC