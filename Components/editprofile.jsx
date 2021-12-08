import React from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,} from 'react-native'
import { Icon,Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

const EditProfile = ({navigation})=>{
    return(
        <>
        <View style={Styles.container}>
            <View style={Styles.header}>
           <TouchableOpacity onPress={()=>navigation.goBack()}><Icon name={'arrow-back'} color={'white'} style={{fontWeight:'700',marginTop:'20%'}} onPress={()=>navigation.goBack()} /></TouchableOpacity>
                <Text style={Styles.textHead}>Edit Profile</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('profile')}><Text style={Styles.subtext}>Done</Text></TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:'2%'}}>
                <Avatar rounded size={'large'} source={require('../assets/users.jpeg')} />
         <TouchableOpacity><Text style={{color:'white',fontSize:24,marginBottom:'2%'}}>Change Profile Picture</Text></TouchableOpacity>
                <View style={{width:'100%',alignItems:'center'}}>
                <TextInput placeholder={'Maria'} label={'First Name'} style={{backgroundColor:'#E8FDF9',borderRadius:10,width:'80%',margin:'2%'}}/>
                <TextInput placeholder={'Fenyane'} label={'Last Name'}  style={{backgroundColor:'#E8FDF9',borderRadius:10,width:'80%',margin:'2%'}}/>
                <TextInput placeholder={'@fenyane02'} label={'User Name'}  style={{backgroundColor:'#E8FDF9',borderRadius:10,width:'80%',margin:'2%'}}/>
                <TextInput placeholder={'fenyane02@gmail.com'} label={'Email Address'}  style={{backgroundColor:'#E8FDF9',borderRadius:10,width:'80%',margin:'2%'}}/>
                <TextInput placeholder={'*******'} label={'Old Password'}  style={{backgroundColor:'#E8FDF9',borderRadius:10,width:'80%',margin:'2%'}}/>
                <TextInput placeholder={' '} label={'New Password'}  style={{backgroundColor:'#E8FDF9',borderRadius:10,width:'80%',margin:'2%'}}/>
                </View>
            </View>
        </View>
        </>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#61B0A2'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        padding:'2%',
        paddingTop:'15%'
      },
      textHead:{
          color:'white',
          paddingLeft:'30%',
          fontSize:24,
          fontWeight:'700'
      },
      subtext:{
          color:'white',
          paddingLeft:'20%',paddingTop:'1%'
      }
})
export default EditProfile