import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from './Components/fundamentals/SplashScreen';
import WelcomeScreen from './Components/fundamentals/WelcomeScreen';
import SignIn from './Components/fundamentals/SignIn';
import SignUp from './Components/fundamentals/SignUp';
import Reset from './Components/fundamentals/resetpassword'
import info from './Components/info';
import Alert from './Components/fundamentals/passwordAlert'
import Home from './Components/home';
import TabNavigator from './Components/bottomTab';
import Hotels from './Components/hotels';
import Rooms from './Components/rooms';
import RoomA from './Components/gallery/roomA';
import RoomB from './Components/gallery/roomB';
import RoomC from './Components/gallery/roomC';
import BathA from './Components/gallery/bathA';
import BathB from './Components/gallery/bathB';
import BathC from './Components/gallery/bathC';
import Lounge from './Components/gallery/lounge';
import Confirm from './Components/bookingDetails';
import Search from './Components/Search';
import PaymentMethod from './Components/payment/payment';
import Method from './Components/payment/paymentmethod';
import ConfirmPayment from './Components/payment/finalpayment';
import Message from './Components/message';
import Review from './Components/review';
import Feedback from './Components/feedback';
import Notification from './Components/notification';
import SearchHistory from './Components/searchHistory';
import EditProfile from './Components/editprofile';
import Maps from './Components/map';
import Landing from './practice/landing';
import PretoriaHotels from './Components/hotelLocation/Pretoria/Pretoria';
import SandtonHotels from './Components/hotelLocation/Sandton/sandton';
import roomMenu from './Components/room/roomsMenu';
import hotelroom from './Components/room/hotelrooms';
import Detail from './Components/room/detail';

const Menu = ()=>{
      const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'bottomTab'} screenOptions={{headerShown:false}}>
             <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen name={'SignIn'} component={SignIn} />
             <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
            <Stack.Screen name={'resetpassword'} component={Reset} />
            <Stack.Screen name={'passwordAlert'} component={Alert} />  
              <Stack.Screen name={'hotels'} component={Hotels}/> 
            <Stack.Screen name={'roomA'} component={RoomA}/>
            <Stack.Screen name={'roomB'} component={RoomB}/>
            <Stack.Screen name={'roomC'} component={RoomC}/>
            <Stack.Screen name={'bathA'} component={BathA}/>
            <Stack.Screen name={'bathB'} component={BathB}/>
            <Stack.Screen name={'bathC'} component={BathC}/>
            <Stack.Screen name={'lounge'} component={Lounge}/>   
             <Stack.Screen name={'bookingDetails'} component={Confirm}/> 
             <Stack.Screen name={'payment'} component={PaymentMethod}/>
              <Stack.Screen name={'finalpayment'} component={ConfirmPayment}/> 
              <Stack.Screen name={'paymentmethod'} component={Method}/>
              <Stack.Screen name={'message'} component={Message}/>
             <Stack.Screen name={'review'} component={Review}/> 
             <Stack.Screen name={'feedback'} component={Feedback}/>
             <Stack.Screen name={'notification'} component={Notification}/>
             <Stack.Screen name={'searchHistory'} component={SearchHistory}/>
             <Stack.Screen name={'editprofile'} component={EditProfile}/>
                <Stack.Screen name={'landing'} component={Landing}/>
              <Stack.Screen name='detail' component={Detail}/> 
             <Stack.Screen name={'map'} component={Maps}/>  
            <Stack.Screen name={'Search'} component={Search}/> 
            <Stack.Screen name={'hotelrooms'} component={hotelroom}/>  
            <Stack.Screen name={'pretoria'} component={PretoriaHotels}/>
            <Stack.Screen name={'sandton'} component={SandtonHotels}/>
            
            <Stack.Screen name={'bottomTab'} component={TabNavigator}/>
            <Stack.Screen name={'rooms'} component={Rooms}/>
            <Stack.Screen name={'roomsMenu'} component={roomMenu}/> 
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}
export default Menu