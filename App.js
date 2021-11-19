import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from './Components/SplashScreen';
import WelcomeScreen from './Components/WelcomeScreen';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Reset from './Components/resetpassword'
import info from './Components/info';
import Alert from './Components/passwordAlert'
import Home from './Components/home';
import TabNavigator from './Components/bottomTab';

const Menu = ()=>{
      const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{headerShown:false}} >
            {/* <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen name={'SignIn'} component={SignIn} />
            <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
            <Stack.Screen name={'resetpassword'} component={Reset} />
            <Stack.Screen name={'passwordAlert'} component={Alert} /> */}
            <Stack.Screen name={'bottomTab'} component={TabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu