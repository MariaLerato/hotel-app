import React from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,ScrollView} from 'react-native'
import {Icon,Input,Avatar} from 'react-native-elements'
import { img } from '../gallery/reusables';

const MyBookings = ({navigation})=>{
    const palm = require('../../assets/palm.png')
    const maslow = require('../../assets/maslow.png')
    const SearchInput =()=>{
        return(
            <View style={{marginTop:'2%'}}>
                <Input
                placeholder={'Search Bookings'}
                containerStyle={{borderBottomColor:'#C4C4C4'}}
                />
            </View>
        )
    }

    return(
        <>
        <ScrollView style={{marginTop:'5%',flex:1,padding:'1%'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2%',borderBottomColor:'#C4C4C4',borderBottomWidth:0.5}}>
            <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                <Avatar rounded size={'medium'} source={require('../../assets/users.jpeg')} />
                <Text style={{fontSize:22,color:'#1C5248',paddingLeft:'4%',marginTop:'3%'}}>My Bookings</Text>
            </View>
           <TouchableOpacity style={{marginRight:'8%',marginTop:'2%'}} onPress={SearchInput}>
                <Icon name={'search'} type={'font-awesome'} color='#4C9285'/>
           </TouchableOpacity>
        </View>
               <View style={{width:'100%',marginTop:'8%'}}>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                      
                      <TouchableOpacity onPress={()=>navigation.navigate('historyDetails',{hotel:img.hotel10})}>
                        <Image source={img.hotel10} style={{width:150,height:170,borderRadius:40,marginTop:'4%'}}/>
                      </TouchableOpacity>
                     <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:img.hotel11})}>
                        <Image source={img.hotel11} style={{width:177,height:210,marginLeft:'4%',borderRadius:30}}/>
                     </TouchableOpacity>
                       
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:img.sand})}>
                       <Image source={img.sand} style={{width:150,height:226,marginTop:'-15%',margin:'2%',borderRadius:20}}/>
                       </TouchableOpacity>
                       <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:palm})}>
                            <Image source={palm} style={{width:177,height:130,margin:'1%',borderRadius:30}}/>
                        </TouchableOpacity>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                        <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:maslow})}>
                            <Image source={maslow} style={{width:150,height:150,padding:'2%',margin:'2%',borderRadius:40}}/>
                        </TouchableOpacity>
                       <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:img.hotel3})}>
                            <Image source={img.hotel3} style={{width:177,height:210,margin:'2%',borderRadius:20,marginTop:'-30%'}}/>
                       </TouchableOpacity>
                     
                   </View>
               </View>
            </ScrollView>
            <TouchableOpacity style={{alignSelf:'flex-end',backgroundColor:'#4C9285',width:70,height:70,alignContent:'center',justifyContent:'center',borderRadius:40,marginTop:'-18%'}}>
                <Icon name={'trash'} type={"font-awesome-5"} color={'#FFFFFF'} size={25} />
            </TouchableOpacity>
        </>
    )
}
export default MyBookings
     {/* <View style={{backgroundColor:'white',borderRadius:20,marginTop:'35%'}}>
                                <View style={{display:'flex',flexDirection:'row',paddingTop:'2%'}}>
                                    <Icon name={'trash'} type={"font-awesome"} color={'#C4C4C4'} style={{paddingLeft:'8%'}} />
                                    <Text style={{color:'#1C5248',fontSize:12,fontWeight:'700',paddingTop:'2%'}}>Hotel Sandton Sun</Text> 
                                </View>
                                <View style={{alignItems:'center',fontSize:10,color:'#C4C4C4'}}>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check In</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>02 Dec 2021</Text>
                                    <Text style={{fontSize:11,color:'#C4C4C4'}}>Check Out</Text>
                                   
                                    </View>
                           </View> */}