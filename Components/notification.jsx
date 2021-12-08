import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ScrollView,} from 'react-native'
import { Icon ,Avatar} from 'react-native-elements';
import Info from './info';

const Notification = ({navigation})=>{
    return(
        <ScrollView>
          <View style={{marginTop:'10%'}}>
          <View style={Styles. head}>
               <View style={Styles.header}>
               <Icon name={'arrow-back'} color={'white'} style={{fontWeight:'700',marginTop:'17%'}} onPress={()=>navigation.goBack()} />
                <Text style={Styles.textHead}>Notifications</Text>
                   </View>
                <TouchableOpacity style={{paddingTop:'4%'}}><Icon name={'bell'} type={'font-awesome'} color={'white'}/></TouchableOpacity>
             </View>
            <View style={{margin:'3%'}}>
                {
                    Info.notify.map(data=>
                        <View key={data.id} style={Styles.notify}>
                            <Avatar rounded size={'medium'} source={data.image}/>
                            <View style={{paddingLeft:'2%'}}>
                                <Text style={Styles.hotelname}>{data.hotelname}</Text>
                                <Text>{data.message}</Text>
                            </View>
                        </View>
                        )
                }
            </View>
          </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%',
       
    },
    head:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'100%',
        backgroundColor:'#87C0B6',
        marginTop:'-10%',
        paddingTop:'14%',
        padding:'2%',
        borderBottomLeftRadius:20,borderBottomEndRadius:20
    },

    textHead: {
        color: 'white',
        fontSize: 30,
        paddingLeft: '8%',
        fontWeight: '600',
        marginTop: '-2%'

    },
    notify:{
        display:'flex',
        flexDirection:'row'
    },
    hotelname:{
        color: '#1C5248',
        fontSize: 22,
        fontWeight:'500'
    }
})
export default Notification