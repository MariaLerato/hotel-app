import React from 'react';
import {View,Text,SafeAreaView,ScrollView} from 'react-native'

class HotelRooms {
    roomNumbers = [
        {id:'0',name:'Room A',price:'1898.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:require('../../assets/roomA.png'),pic2:require('../../assets/roomABath.png'),navigate:'roomA',bath:'bathA'},
        {id:'1',name:'Room B',price:'1500.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:require('../../assets/roomB.png'),pic2:require('../../assets/roomBBath.png'),navigate:'roomB',bath:'bathB'},
        {id:'2',name:'Room A',price:'2100.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:require('../../assets/whitebed.png'),pic2:require('../../assets/zinc.png'),pic3:require('../../assets/lounge.png'),navigate:'roomC',bath:'bathC',lou:'lounge'}
    ]
    facility = [
        {id:'0',name:'bath',type:'font-awesome-5'},
        {id:'1',name:'snowflake',type:'font-awesome-5'},
        {id:'3',name:'wifi',type:'font-awesome-5'},
     
    ]
    
}

export default new HotelRooms()