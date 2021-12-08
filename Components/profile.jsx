import React from 'react';
import {View,Text,Image,ImageBackground,ScrollView,StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';

const Profile = ({navigation})=>{
    return(
        <View style={Styles.container}>
            <View style={{alignSelf:'center',justifyContent:'center',marginTop:'0%',backgroundColor:'white',height:'50%',width:'100%',alignItems:'center'}}>
                <Image source={require('../assets/users.jpeg')} style={{width:95,height:94,borderRadius:40,borderColor:'white',borderWidth:1}}/>
                <Text style={{ color: '#1C5248',
        fontSize: 22,
        fontWeight:'600',marginBottom:'2%'}}>Maria Fenyane</Text>
                <View style={{borderRadius:20,borderColor:'#1C5248',borderWidth:1,padding:'3%',width:'30%',alignItems:'center',marginBottom:'2%'}}>
                    <Text>Edit Profile</Text>
                </View>
                <Icon name={'history'} type={'font-awesome'} color={'#1C5248'} size={35} style={{marginTop:'5%'}}/>

            </View>
            <View style={{marginTop:'-8%',backgroundColor:'#EBE9E9',alignItems:'center',borderTopStartRadius:20,borderTopEndRadius:20}}>
               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'4%'}}>
               <Icon name={'trash'} type={'font-awesome'} color='#4C9285' />
                    <Text style={{color:'#1C5248',fontWeight:'700',fontSize:18,marginLeft:'30%'}}>My History </Text>
             <TouchableOpacity onPress={()=>navigation.navigate('searchHistory')}><Icon name={'search'} type={'font-awesome'} color='#4C9285' style={{alignSelf:'flex-end',marginLeft:'20%'}}/></TouchableOpacity>
               </View>
               <View style={{width:'100%'}}>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/pretoria.png')} style={{width:150,height:150,padding:'2%',margin:'2%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'85%',color:'white'}}>Delete from History</Text>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/sun.png')} style={{width:177,height:210,margin:'2%',borderRadius:70}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'95%',color:'white'}}>Delete from History</Text>
                       </ImageBackground>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/sandton.png')} style={{width:150,height:226,marginTop:'-15%',margin:'2%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'75%',color:'white'}}>Delete from History</Text>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/palm.png')} style={{width:177,height:80,margin:'1%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'25%',color:'white'}}>Delete from History</Text>
                       </ImageBackground>
                   </View>
               </View>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default Profile