import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './home'
import {Icon} from 'react-native-elements'
import Search from './Search'
import Bookings from './bookings'
import Profile from './profile'
import MyBookings from './myBookings'

const TabNavigator=()=>{
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarActiveTintColor :'#1C5248'}}>
            <Tab.Screen name="home" component={Home} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'home'} type="font-awesome" size={size} color='#1C5248'/>
            ),}}
            />
               <Tab.Screen name="search" component={Search} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'search'} type="font-awesome" size={size} color='#B2B2B2'/>
            ),}}
            />
               <Tab.Screen name="myBookings" component={MyBookings} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'bookmark'} type="font-awesome" size={size}  color='#B2B2B2'/>
            ),}}
            />
                <Tab.Screen name="profile" component={Profile} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'user'} type="font-awesome" size={19}  color='#B2B2B2'/>
            ),}}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator
