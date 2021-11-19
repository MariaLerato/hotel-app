import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Input,Icon } from 'react-native-elements'

const Reset = ({navigation})=>{
    return (
        <>
            <View style={styles.ResetContainer}>
                <Text style={styles.welcomeText}>Reset Password</Text>
            </View>
            <View style={styles. Container}>
                <Text style={styles.title}>Email</Text>
                <Input
                placeholder=" Email Address"
                style={styles.input}
                leftIcon={<Icon name="envelope-o" type="font-awesome" color='#1C5248'  />}
                />
                <TouchableOpacity style={styles.touchableOpacity} onPress={()=>navigation.navigate('passwordAlert')}><Text style={styles.touchableText}>Submit</Text></TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    ResetContainer:{
        height:'55%',
        backgroundColor:'#61B0A2',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    input:{

    },
    welcomeText:{
        marginTop:'20%',
        color:'white',
        fontWeight:'700',
        fontSize:40,
        textAlign:"center",
        padding:'3%'
    },
    touchableOpacity:{
        backgroundColor:'#06AC8E',
        height:65,
        marginTop:'10%',
        borderRadius:40,
        alignItems:'center',
        justifyContent: 'center',
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
    },
    touchableText:{
        fontSize:28,
        color:'#FFFFFF',
        
       
    },
    Container:{
        backgroundColor:'#FFFFFF',
        marginTop:'-15%',
        borderTopEndRadius:50,
        borderTopStartRadius:50,
        flex:1,
        padding:'8%'
    },
    title:{
        padding:'3%',
        fontSize:24,
        color:'#1C5248'
    }
})
export default Reset