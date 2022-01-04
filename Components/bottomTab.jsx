import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './home'
import {Icon} from 'react-native-elements'
import Search from './Search'

import Profile from './profile'
import MyBookings from './myBookings'

const TabNavigator=()=>{
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator  
        screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarActiveColor :'#1C5248',tabBarInactiveTintColor:'#B2B2B2',tabBarActiveBackgroundColor:'#f2fcfa',
        }}>
            <Tab.Screen name="home" component={Home} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'home'} type="font-awesome"   color={'#e8ebea'}  />
            ), }}
            />
               <Tab.Screen name="Search" component={Search} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'search'} type="font-awesome"  color={'#e8ebea'} />
            ),}}
            />
               <Tab.Screen name="myBookings" component={MyBookings} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'bookmark'} type="font-awesome" color={'#e8ebea'} />
            ),}}
            />
                <Tab.Screen name="profile" component={Profile} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'user'} type="font-awesome"  color={'#e8ebea'} />
            ),}}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator
