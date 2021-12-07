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
import Hotels from './Components/hotels';
import Rooms from './Components/rooms';
import RoomA from './Components/roomA';
import RoomB from './Components/roomB';
import RoomC from './Components/roomC';
import BathA from './Components/bathA';
import BathB from './Components/bathB';
import BathC from './Components/bathC';
import Lounge from './Components/lounge';
import Bookings from './Components/bookings';
import Confirm from './Components/bookingDetails';
import Search from './Components/Search';
import PaymentMethod from './Components/payment';
import Method from './Components/paymentmethod';
import ConfirmPayment from './Components/finalpayment';
import Message from './Components/message';

const Menu = ()=>{
      const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{headerShown:false}} >
            <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen name={'SignIn'} component={SignIn} />
            <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
            <Stack.Screen name={'resetpassword'} component={Reset} />
            <Stack.Screen name={'passwordAlert'} component={Alert} /> 
             <Stack.Screen name={'hotels'} component={Hotels}/>
            <Stack.Screen name={'rooms'} component={Rooms}/>
            <Stack.Screen name={'roomA'} component={RoomA}/>
            <Stack.Screen name={'roomB'} component={RoomB}/>
            <Stack.Screen name={'roomC'} component={RoomC}/>
            <Stack.Screen name={'bathA'} component={BathA}/>
            <Stack.Screen name={'bathB'} component={BathB}/>
            <Stack.Screen name={'bathC'} component={BathC}/>
            <Stack.Screen name={'lounge'} component={Lounge}/>
            <Stack.Screen name={'bookings'} component={Bookings}/>
            <Stack.Screen name={'Search'} component={Search}/> 
            <Stack.Screen name={'bookingDetails'} component={Confirm}/> 
            <Stack.Screen name={'payment'} component={PaymentMethod}/>
             <Stack.Screen name={'paymentmethod'} component={Method}/>
            <Stack.Screen name={'finalpayment'} component={ConfirmPayment}/>
            <Stack.Screen name={'message'} component={Message}/>
            <Stack.Screen name={'home'} component={Home}/>
            <Stack.Screen name={'bottomTab'} component={TabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu