import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,Picker} from 'react-native'
import { Icon,Input } from 'react-native-elements';
import Info from './info';


const Home = ()=>{
    
    return(
       <>
        <View style={styles.image}>
           <Image source={require('../assets/homeScreen.png')} style={styles.image}/>
        </View> 
        <View style={styles.container}>
            {Info.info.map(data=>
                <View style={styles.header} key={data.id}>
                    <View>
                        <Text style={styles. headertext}>Hi {data.name}</Text>
                        <Text style={{color:'#6E9B93',fontSize:14,paddingLeft:'1%'}}>Where do you want to stay?</Text>
                    </View>
                   
                        <Image source={{uri:data.img}} style={styles.profile}/>
                    
                </View>
                )}
                <View style={styles.text}>
                    <Input 
                        leftIcon={
                        <Icon name={'map-marker'} 
                        type="font-awesome"
                        size={25} 
                        color={'#61B0A2'}
                        style={{backgroundColor:'white',}}
                        />}
                        containerStyle={{backgroundColor:'white',height:'15%'}}
                        inputContainerStyle={{borderColor:'white'}}
                        placeholder={'Enter place name or city'}
                        style={{fontSize:12,padding:'2%'}}
                    />
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                <View style={styles.picker}>
                <Picker style={{color:'#57A99A',marginTop:'-4%'}}>
                    <Picker.Item label = 'Check in' value = 'ItemValue' />
                </Picker>
               
                </View>
                <View style={styles.picker}>
                <Picker style={{color:'#57A99A',marginTop:'-4%'}}>
                    <Picker.Item label = 'Check out' value = 'ItemValue' />
                </Picker>
               
                </View>
                </View>
                <View style={styles. numberText}>
                <Input 
                        leftIcon={
                        <Icon name={'users'} 
                        type="font-awesome"
                        size={25} 
                        color={'#61B0A2'}
                        style={{backgroundColor:'white',}}
                        />}
                        containerStyle={{backgroundColor:'white',height:'15%'}}
                        inputContainerStyle={{borderColor:'white'}}
                        placeholder={'How many guests ?'}
                        style={{fontSize:12,padding:'2%',margin:'2%'}}
                />
                </View>
                <View style={styles. numberText}>
                        <Input 
                        leftIcon={
                        <Icon name={'bed'} 
                        type="font-awesome"
                        size={25} 
                        color={'#61B0A2'}
                        style={{backgroundColor:'white',}}
                        />}
                        containerStyle={{backgroundColor:'white',height:'15%'}}
                        inputContainerStyle={{borderColor:'white'}}
                        placeholder={'How many rooms ?'}
                        style={{fontSize:12,padding:'2%',margin:'2%'}}
                    />
                </View>
                <TouchableOpacity style={styles. touchableOpacity}><Text style={styles.touchableText}>Get it</Text></TouchableOpacity>
        </View>
       </>
    )
}
const styles = StyleSheet.create({
    container:{
       backgroundColor:'#EDFFFC',
       flex:1,
       marginTop:'-70%',
       borderTopEndRadius:40,
       borderTopStartRadius:40,
       padding:'6%'
    },
    image:{
        height:'80%',
        width:'100%'
    },  
    header:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
    },
    text:{
        backgroundColor:'#FFFFFF',
        color:'#61B0A2',
        margin:'4%',
        paddingLeft:'2%',
        fontSize:8
       

    },
    numberText:{
        backgroundColor:'#FFFFFF',
        color:'#61B0A2',
        margin:'2%',
        paddingLeft:'2%',
        fontSize:8,
        marginTop:'-0.2%'
     
    },
    profile:{
        width:'20%',
        height:69,
        marginLeft:'30%',
        borderRadius:40,
        marginTop:'-2%'

    },
    headertext:{
        color:'#42CDB4',
        fontSize:25,
        fontWeight:'700',
        padding:'2%'
    },
    picker:{
        width:'40%',
        backgroundColor:'#FFFFFF',
        height:'60%',margin:'1%',
        marginLeft:'4%'

    },
    touchableOpacity:{
        backgroundColor:'#64D3BF',
        height:40,
        marginLeft:'60%',
        borderRadius:40,
        marginTop:'6%',
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
        width:'40%',
        borderColor:'rgba(0,0,0,.2)',
    },
    touchableText:{
        fontSize:20,
        color:'#FFFFFF',
        fontWeight:'700',
        
       
    },

})
export default Home