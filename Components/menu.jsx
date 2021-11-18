import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';

const Menu = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{headerShown:true}} >
            <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            {/* <Stack.Screen name={'SignIn'} component={} /> */}
            <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
            {/* <Stack.Screen name={'SignUp'} component={} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu