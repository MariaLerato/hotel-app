import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'

const Bookings = ({navigation})=>{
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/pretoria.png')} style={{width:'100%',height:'70%'}}>
                <View style={styles.head}>
                    <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
                        <Icon name={'arrow-back'} color={'white'} />
                    </TouchableOpacity>
                    <View  style={styles.back}>
                        <Icon name={'bookmark'}  color={'white'}/>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.name}>
               <View>
                   <Text style={styles.title}>
                       Hotel Sandton Sun
                   </Text>
                   <Text style={styles.sub}>Rivonia Rd</Text>
                   <Text style={styles.price}>Price</Text>
                   <Text style={styles.type}>R1453/Night</Text>
               </View>
               <View>
                   <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                   <Text style={{color:'#1C5248',}}>4.9</Text>
               </View>
            </View>
            <View style={{alignSelf:'center',width:'90%',padding:'2%'}} >
                <Text style={styles.title}>
                    Detail
                </Text>
                <Text style={styles.type}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,
                sed adipiscing viverra quam.Tempus eros egestas augue elit 
                </Text>
                <Text style={styles.subText}>
                    On Map
                </Text>
                <ImageBackground source={require('../assets/map.png')} style={{width:344,height:130,alignSelf:'center',marginTop:'5%'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('bookingDetails')} style={{backgroundColor:'#53B5A3',width:'95%',height:57,alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:'20%',borderRadius:10}}><Text style={{color:'white',fontSize:24,fontWeight:'700'}}>Book Now</Text></TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'white',
    },
    head:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'10%'
    },
    back:{
        width:40,
        height:42,
        borderRadius:40,
        backgroundColor:'black',
        opacity:0.3,
        margin:'4%',
        alignContent:'center',
        justifyContent:'center'
    },
    name:{
        backgroundColor:'white',
        width:'90%',
        display:'flex',
        flexDirection:'row',
        padding:'5%',
        marginTop:'-55%',
        alignSelf:'center',
        borderRadius:10,
        justifyContent:'space-between'
    },
    title:{
        color:'#1C5248',
        fontWeight:'700',
        fontSize:18
    },
    subText:{
        color:'#1C5248',
        fontWeight:'700',
        fontSize:18,
        marginTop:'2%'
    },
    sub:{
        color:'#B2B2B2'
    },
    price:{
        color:'#1C5248',
        fontWeight:'700',
    },
    type:{
        color:'#B2B2B2'
    }
})
export default Bookings