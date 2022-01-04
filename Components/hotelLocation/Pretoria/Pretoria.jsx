import React from 'react';
import {Image,Text,View,ScrollView,TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import { Icon } from 'react-native-elements';
import Info from '../../info';

const PretoriaHotels = ({navigation})=>{
   
    return(
        <>
        <View >
            <View style={{width:'100%',display:'flex',flexDirection:'row',marginTop:'10%',alignItems:'center',marginLeft:'2%',padding:'2%'}}>
               <TouchableOpacity onPress={()=>navigation.navigate('Search')} ><Icon name={'arrow-back'} size={25} color= {'#1C5248'}/></TouchableOpacity>
                <Text style={{fontSize:25,paddingLeft:"2%",color: '#1C5248'}}>Pretoria Hotels</Text>
            </View>
               <ScrollView>
               <View>
            {
                Info.pretoria.map(data=>
                    <>
                        <View style={{flex:1,display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'2%'}} key={data.id}>
                            <View>
                                <Text style={{marginTop:'40%',padding:'1%',fontSize:18,color: '#1C5248',}}>
                                    {data.hotelname}
                                </Text>
                                <TouchableOpacity style={{alignItems:'flex-end'}}  onPress={()=>navigation.navigate('review')}>
                                    <Text style={{ color:'#F24C04'}}>{data.review}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity  onPress={()=>navigation.navigate('rooms')} >
                            <Image
                            source={data.image}
                            style={{width:200,height:190,borderRadius:20, }}
                            ></Image>    
                            </TouchableOpacity>        
                        </View>
                    </>)
            }
        </View>
               </ScrollView>
        </View>
        </>
    )
}
export default PretoriaHotels