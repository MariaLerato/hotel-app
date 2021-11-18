import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from './Components/SplashScreen';
import WelcomeScreen from './Components/WelcomeScreen';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

const Menu = ()=>{
      const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{headerShown:false}} >
            <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen name={'SignIn'} component={SignIn} />
            <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu