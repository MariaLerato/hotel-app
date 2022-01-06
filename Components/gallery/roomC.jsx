import React from 'react';
import {View,ImageBackground,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { img } from './reusables';

const RoomC = ({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('bathC')} style={styles.container}>
            <ImageBackground source={img.wine} style={{width:'100%',alignSelf:'center',height:'100%'}}>
                <Text style={styles.text}>1/4</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    
        container:{
            flex:1,
            
        },
        text:{
            color:'white',
            fontSize:24,
            alignSelf:'center',
            marginTop:'auto'
        }
})
export default RoomC