import React from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,ScrollView} from 'react-native'
import {Icon,Input,Avatar} from 'react-native-elements'

const MyBookings = ({navigation})=>{

    return(
        <>
        <ScrollView style={{marginTop:'10%',flex:1,padding:'1%'}}>
        {/* <Icon name={'arrow-back'} color={'#1C5248'} style={{fontWeight:'700',marginTop:'17%'}} onPress={()=>navigation.goBack()} /> */}
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
            <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                <Avatar rounded size={'medium'} source={require('../assets/users.jpeg')}/>
                <Text style={{fontSize:22,color:'#1C5248',paddingLeft:'4%',marginTop:'3%'}}>My Bookings</Text>
            </View>
            <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
        </View>
               <View style={{padding:'4%'}}>
                    <Input  
                    placeholder={'Search Bookings'}
                    leftIcon={<Icon name={'search'} type={'font-awesome'} color='#4C9285'/>}
                    />
                   
               </View>
               <View style={{width:'100%'}}>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/pretoria.png')} style={{width:150,height:150,padding:'2%',margin:'2%'}}>
                           <View style={{backgroundColor:'white',borderRadius:20,marginTop:'35%'}}>
                                <View style={{display:'flex',flexDirection:'row',paddingTop:'2%'}}>
                                    <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
                                    <Text style={{color:'#1C5248',fontSize:12,fontWeight:'700',paddingTop:'2%'}}>Hotel Sandton Sun</Text> 
                                </View>
                                <View style={{alignItems:'center',fontSize:10,color:'#C4C4C4'}}>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check In</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>02 Dec 2021</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check Out</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>10 Dec 2021</Text>
                                    </View>
                           </View>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/sun.png')} style={{width:177,height:210,margin:'2%',borderRadius:70}}>
                       <View style={{backgroundColor:'white',borderRadius:20,marginTop:'65%',margin:'6%'}}>
                                <View style={{display:'flex',flexDirection:'row',paddingTop:'2%'}}>
                                    <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
                                    <Text style={{color:'#1C5248',fontSize:12,fontWeight:'700',paddingTop:'2%'}}>Hotel Sandton Sun</Text> 
                                </View>
                                <View style={{alignItems:'center',fontSize:10,color:'#C4C4C4'}}>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check In</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>02 Dec 2021</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check Out</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>10 Dec 2021</Text>
                                    </View>
                           </View>
                       </ImageBackground>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/sandton.png')} style={{width:150,height:226,marginTop:'-15%',margin:'2%'}}>
                       <View style={{backgroundColor:'white',borderRadius:20,marginTop:'85%',margin:'6%'}}>
                                <View style={{display:'flex',flexDirection:'row',paddingTop:'2%'}}>
                                    <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
                                    <Text style={{color:'#1C5248',fontSize:12,fontWeight:'700',paddingTop:'2%'}}>Hotel Sandton Sun</Text> 
                                </View>
                                <View style={{alignItems:'center',fontSize:10,color:'#C4C4C4'}}>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check In</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>02 Dec 2021</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check Out</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>10 Dec 2021</Text>
                                    </View>
                           </View>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/palm.png')} style={{width:177,height:110,margin:'1%'}}>
                       <View style={{backgroundColor:'white',borderRadius:20,marginTop:'10%',margin:'8%'}}>
                                <View style={{display:'flex',flexDirection:'row',paddingTop:'2%'}}>
                                    <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
                                    <Text style={{color:'#1C5248',fontSize:12,fontWeight:'700',paddingTop:'2%'}}>Hotel Sandton Sun</Text> 
                                </View>
                                <View style={{alignItems:'center',fontSize:10,color:'#C4C4C4'}}>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check In</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>02 Dec 2021</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check Out</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>10 Dec 2021</Text>
                                    </View>
                           </View>
                       </ImageBackground>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/maslow.png')} style={{width:150,height:150,padding:'2%',margin:'2%'}}>
                       <View style={{backgroundColor:'white',borderRadius:20,marginTop:'35%',margin:'2%'}}>
                                <View style={{display:'flex',flexDirection:'row',paddingTop:'2%'}}>
                                    <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
                                    <Text style={{color:'#1C5248',fontSize:12,fontWeight:'700',paddingTop:'2%'}}>Hotel Sandton Sun</Text> 
                                </View>
                                <View style={{alignItems:'center',fontSize:10,color:'#C4C4C4'}}>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check In</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>02 Dec 2021</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check Out</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>10 Dec 2021</Text>
                                    </View>
                           </View>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/protea.png')} style={{width:177,height:210,margin:'2%',borderRadius:70,marginTop:'-15%'}}>
                       <View style={{backgroundColor:'white',borderRadius:20,marginTop:'60%',margin:'8%'}}>
                                <View style={{display:'flex',flexDirection:'row',paddingTop:'2%'}}>
                                    <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
                                    <Text style={{color:'#1C5248',fontSize:12,fontWeight:'700',paddingTop:'2%'}}>Hotel Sandton Sun</Text> 
                                </View>
                                <View style={{alignItems:'center',fontSize:10,color:'#C4C4C4'}}>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check In</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>02 Dec 2021</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check Out</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>10 Dec 2021</Text>
                                    </View>
                           </View>
                       </ImageBackground>
                   </View>
               </View>
            </ScrollView>
        </>
    )
}
export default MyBookings