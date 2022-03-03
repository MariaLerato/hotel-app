import React, { useState,useEffect } from 'react';
import {View,Text,} from 'react-native'
import MapView,{Marker,Callout} from 'react-native-maps'
import {Icon,Avatar} from 'react-native-elements'
import CallOut from './box';
import location from './location';
import BackendInfo from '../service/service'

const Maps = ({data,route})=>{
   const {id} = route.params
   const [hotels,setHotels] = useState([])
   const [isLoaded,setIsLoaded] = useState(false)

   const retrieveHotels = () => {
    BackendInfo.getAll()
      .then((res) => {
        console.log('maps',res.data);
        setIsLoaded(true);
        setHotels(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
   useEffect(()=>{
       retrieveHotels()
   },[])

   const HotelLocation = hotels.filter((data)=>
   data.hotel_id === id
   )
    return(
        <>
        {HotelLocation.map(data=>
            <>
             <MapView
                initialRegion={
                    {
                        latitude:Number(data.latitude),
                        longitude:Number(data.longitude),
                        latitudeDelta:0.005,
                        longitudeDelta:0.005
                    }
                }
                key={data._id}
                showsUserLocation={true}
                style={{flex:1}}
           >
                 <Marker 
                    coordinate={{
                        latitude:Number(data.latitude),
                        longitude:Number(data.longitude),
                    }}
                    identifier='Hotel'
                >
                    <Callout tooltip={true} >
                        <View >
                      
                        <Text style={{color: 'red',fontSize:20,fontWeight:'700'}}>{data.name}</Text>
                        <Text style={{color: '#06AC8E',textAlign:'center',fontWeight:'700'}}>5-star hotel</Text>
                        </View>
                      
                    </Callout>
                    {/* <View style={{marginTop:'auto',justifyContent:'center'}}>
                        <Avatar source={data.image} size={'small'}/>
                        <Text>{data.hotelname}</Text>
                        <Text>{data.des}</Text>
                    </View> */}
                </Marker>
            </MapView>
            
            </>
        // <>
        //     <Text style={{marginTop:'5%'}}>{data.longitude}</Text>
        //      {/* <Avatar source={{uri:data.image}} size={'small'} rounded/> */}
        //     </>
            )}
            
           
        </>
    )
}

export default Maps
