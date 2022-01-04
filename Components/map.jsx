import React from 'react';
import {View,Text,} from 'react-native'
import MapView,{Marker,Callout} from 'react-native-maps'
import CallOut from './box';

const Maps = ({data,route})=>{
    const lati = route.params.lati
    const longi = route.params.longi
    return(
        <>
            <MapView
                initialRegion={
                    {
                        latitude:-26.10499958,
                        longitude:28.052499,
                        latitudeDelta:0.005,
                        longitudeDelta:0.005
                    }
                }
                showsUserLocation={true}
              
                style={{flex:1}}
           >
                 <Marker 
                    coordinate={{
                        latitude:lati,
                        longitude:longi,
                    }}
                    identifier='Hotel'
                >
                    <Callout tooltip={true} >
                        <CallOut data={data}/>
                    </Callout>
                </Marker>
            </MapView>
        </>
    )
}

export default Maps
// const [popular, setPopular] = useState([]);
// const [near,setNear]=useState([])

// const fullData = dummyData.hotels;

// useEffect(() => {
//   var data = [];
//   var near=[]
//   const getPopular = () => {
//     data = fullData.filter((hotel) => hotel.rating > 4);
//   };
//   const getNear=()=>{
//       near=fullData.filter((hotel) => hotel.address ==='polokwane');
//   }
//   getPopular();
//   getNear()
//   setPopular(data);
//   setNear(near)
// }, []);
// Latitude: -26° 06' 18.00" S Longitude: 28° 03' 9.00" E