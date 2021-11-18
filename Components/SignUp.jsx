import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Input,Icon} from 'react-native-elements'

const SignUp = ({navigation})=>{
    return(
        <>
          <View style={styles.SignInContainer}>
              <Text style={styles.WelcomeText}>Register Now!</Text>
          </View>
          <View style={styles.Sign}>
              <Text style={styles.title}>E-mail</Text>
                <Input
                placeholder=" Email Address"
                style={styles.input}
                leftIcon={<Icon name="envelope-o" type="font-awesome" color='#1C5248' />}
                />
                 <Text style={styles.title} onPress={()=>navigation.navigate('reset')}>Password</Text>
                <Input
                placeholder=" Your Password"
                style={styles.input}
                leftIcon={<Icon name="lock" type="font-awesome" color='#1C5248' />}
                rightIcon={<Icon name="eye-slash" type="font-awesome" color='#1C5248' />}
                />
                   <Text style={styles.title} onPress={()=>navigation.navigate('reset')}>Password</Text>
                <Input
                placeholder=" Your Password"
                style={styles.input}
                leftIcon={<Icon name="lock" type="font-awesome" color='#1C5248' />}
                rightIcon={<Icon name="eye-slash" type="font-awesome" color='#1C5248' />}
                />
                <Text>By sigining up you agree to the terms of the service and privacy policy</Text>
                <TouchableOpacity style={styles.touchableOpacity} ><Text style={styles.touchableText}>Sign In</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('SignUp')}><Text style={styles.touchabletext}>Sign Up</Text></TouchableOpacity>
          </View>  
        </>
    )
}
const styles = StyleSheet.create({
    SignInContainer: {
        height:'30%',
        backgroundColor:'#61B0A2',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    Sign:{
        backgroundColor:'#FFFFFF',
        marginTop:'-10%',
        borderRadius:40,
        flex:1,
        padding:'4%'
    },
    WelcomeText:{
        color:'#FFFFFF',
        fontSize:48,
        padding:'4%',
        fontWeight:'700'
    },
    input:{

    },
    title:{
        padding:4,
        fontSize:24,
        color:'#1C5248'
    },
    password:{
        color:'#06AC8E',
        fontSize:18
    },
    touchableOpacity:{
        backgroundColor:'#06AC8E',
        height:62,
     
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
        fontSize:24,
        color:'#FFFFFF',
       
    },
    touchable:{
        backgroundColor:'#EBE9E9',
        height:62,
        marginTop:'5%',
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
    touchabletext:{
        fontSize:24,
        color:'#06AC8E',
        
    },
    terms:{
        padding:'4%'
    }
})
export default SignUp