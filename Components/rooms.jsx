import React from 'react';
import {View,Text,ScrollView,ImageBackground,Image,StyleSheet,TouchableOpacity} from 'react-native'
import info from './info';
import { Icon } from 'react-native-elements';

const Rooms = ({navigation})=>{
    return(
        <ScrollView style={Styles.container} >
            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#1C5248'} style={{fontWeight:'700',marginTop:'17%'}} onPress={()=>navigation.goBack()} />
                <Text style={Styles.textHead}>Our Rooms</Text>
           </View>
           <View>
                <View style={Styles.subHead}>
             <TouchableOpacity onPress={()=>navigation.navigate('bookings')}><Text style={Styles.RoomHead} >Room A</Text></TouchableOpacity>
                    <Text style={Styles.price}>R1898.00</Text>
                </View>
                <Text style={Styles.subtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Urna diam mattis mi eu tellus ut lobortis aliquam. Non,
                </Text>
                <View style={Styles.facilities}>
                  <View>
                    <Icon name={'bath'} type={'font-awesome'} color={'#447E74'}/>
                    <Text style={Styles.text}>Private Bathroom</Text>
                    </View>
                    <View>
                        <Icon name={'wind'} type={'font-awesome'} color={'#447E74'}/>
                        <Text style={Styles.text}>Personal AC</Text>
                    </View>
                </View>
                <ScrollView horizontal style={{padding:'2%'}}>
        <TouchableOpacity style={Styles. touchable} onPress={()=>navigation.navigate('roomA')}><Image source={require('../assets/roomA.png')} onPress={()=>navigation.navigate('roomA')} /></TouchableOpacity>
        <TouchableOpacity style={Styles. touchable} onPress={()=>navigation.navigate('bathA')}><Image source={require('../assets/roomABath.png')} style={{width:160}}  onPress={()=>navigation.navigate('bathA')} /></TouchableOpacity>
                </ScrollView>
           </View>
           <View>
                <View style={Styles.subHead}>
                    <Text style={Styles.RoomHead}>Room B</Text>
                    <Text style={Styles.price}>R1500.00</Text>
                </View>
                <Text style={Styles.subtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Urna diam mattis mi eu tellus ut lobortis aliquam. Non,
                </Text>
                <View style={Styles.facilities}>
                  <View>
                    <Icon name={'bath'} type={'font-awesome'} color={'#447E74'}/>
                    <Text style={Styles.text}>Private Bathroom</Text>
                    </View>
                    <View>
                        <Icon name={'fire'} type={'font-awesome'} color={'#F24C04'}/>
                        <Text style={Styles.text}>Cozy Fireplace</Text>
                    </View>
                </View>
                <ScrollView horizontal style={{padding:'2%'}}>
                <TouchableOpacity style={Styles. touchable} onPress={()=>navigation.navigate('roomB')}><Image source={require('../assets/roomB.png')} style={{width:180}}></Image></TouchableOpacity>
                <TouchableOpacity style={Styles. touchable} onPress={()=>navigation.navigate('bathB')}><Image source={require('../assets/roomBBath.png')} style={{width:180,height:140}}></Image></TouchableOpacity>
                </ScrollView>
           </View>
           <View>
                <View style={Styles.subHead}>
                    <Text style={Styles.RoomHead}>Room C</Text>
                    <Text style={Styles.price}>R2100.00</Text>
                </View>
                <Text style={Styles.subtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Urna diam mattis mi eu tellus ut lobortis aliquam. Non,
                </Text>
                <View style={Styles.facilities}>
                  <View>
                    <Icon name={'bath'} type={'font-awesome'} color={'#447E74'}/>
                    <Text style={Styles.text}>Private Bathroom</Text>
                    </View>
                    <View>
                        <Icon name={'ac'} type={'font-awesome'} color={'#447E74'}/>
                        <Text style={Styles.text}>Personal AC</Text>
                    </View>
                    <View>
                        <Icon name={'couch'} type={'font-awesome5'} color={'#447E74'}/>
                        <Text style={Styles.text}>Lounge</Text>
                    </View>
                </View>
                <ScrollView horizontal style={{padding:'2%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('roomC')} style={Styles. touchable}><Image source={require('../assets/whitebed.png')} style={{width:200,borderRadius:10}} ></Image></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('bathC')} style={Styles. touchable}><Image source={require('../assets/zinc.png')} style={{width:200,borderRadius:10}} ></Image></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('lounge')} style={Styles. touchable}><Image source={require('../assets/lounge.png')} style={{width:200,borderRadius:10}} ></Image></TouchableOpacity>
                </ScrollView>
           </View>

        </ScrollView>
    )
}
const Styles = StyleSheet.create({
  container:{
    marginTop:'10%'
  },
  header:{
    display:'flex',
    flexDirection:'row',
    padding:'2%'
  },
  textHead:{
    color:'#1C5248',
    fontSize:26,
    paddingLeft:'5%',
    fontWeight:'700'
  },
  subHead:{
    display:'flex',
    flexDirection:'row',
    padding:'2%',
    justifyContent:'space-between'
  },
  RoomHead:{
      color:'#1C5248',
      fontSize:20
  },
  price:{
      color:'#06AC8E',
    fontSize:17,
    margin:'1%'
  },
  subtext:{
      color:'#B2B2B2',
      padding:'2%',
      fontSize:16
  },
  facilities:{
    display:'flex',
    flexDirection:'row',
     width:'60%',
  },
  text:{
      width:'60%',
      marginLeft:'17%',
      textAlign:'center',
      color:'#8BA9A3'
  },
  touchable:{
    padding:'1%'
  }

})
    


export default Rooms