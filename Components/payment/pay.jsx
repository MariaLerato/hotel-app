import React,{useState,useEffect} from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';
import BackendInfo from '../service/service'
import registerNNPushToken from 'native-notify'
import { registerIndieID } from 'native-notify';
import axios from 'axios';
// import nodemailer from 'nodemailer'

const  Pay=({navigation,route},index)=> {
    const {hotelname,dateIn,dateOut,roomPrice,name,hotelImage,guests,rooms,Room,roomId} = route.params
    console.log('search',rooms,guests,hotelname,name)
    const [token,setToken] = useState()

     const guestId=`1478${name}`

    // const TokenRegister = ()=>{
      registerNNPushToken(2214,'NN6KNoOr2cYVZgro69Hq5Z')
    

    async function BookRoom(e){
        // e.preventDefault()
        const newGuest = {
          guestId,  
          name,
            guests,
            rooms,
            Room,
            roomPrice,
            dateIn,
            dateOut,
            hotelImage,
            hotelname
          };
        console.log(newGuest)
        BackendInfo.createGuest(newGuest)
        .then( async(res)=>{
            console.log('success',res.data)
            
            axios.post(`https://app.nativenotify.com/api/indie/notification`, {
              subID: `${res.data.guestId}`,
              appId: 2214,
              appToken: 'NN6KNoOr2cYVZgro69Hq5Z',
              title: 'Congratulations',
              message: `You have successfully booked your suite at ${hotelname}.
              Booking Details Are as follows:
                Check In:${dateIn},
                Room Price:${roomPrice}`
              ,pushData:{screenName:"Montello Hotel Booking App"}
            }).then((res)=>{
            console.log('Sent You A Notification Please Check')
          }).catch((e)=>{
            console.log('error',e)
          })
          // let testAccount = await nodemailer.createTestAccount()
          // let transporter = nodemailer.createTransport({
          //     service:"Gmail",
          //     auth:{
          //         user:"fenyane02@gmail.com",
          //         pass:"9902080625088"
          //     }
          // })
          // await transporter.sendMail({
          //     from:'fenyane02@gmail.com',
          //     to:email,
          //     subject:"Hello",
          //     text:"hello maria",
          // }).then((res)=>{
          //     res.status(200).json({message:'email sent'})
          // }).catch((error)=>{
          //     console.log('error email',error)
          // })
          // console.log("message sent:%s",info.messageId)
          // console.log("Preview URL:%s", nodemailer.getTestMessageUrl(info))
          // console.log(ClientRes)
          // res.json({status:"Success"})
          // main().catch(console.error)
          navigation.navigate("historyDetails",{hotelname:hotelname,dateIn:dateIn,dateOut:dateOut,roomNo:rooms,Totalprice:roomPrice,name:name,image:hotelImage}) 
        }).catch((e)=>{
            console.log(e)
        })
       
    }
    return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_a32884e2cf099621f5eaa59f570898762882fa4b"
        amount={roomPrice}
        billingEmail="fenyane02@gmail.com"
        billingName={name}
        billingMobile="0793879978"
        activityIndicatorColor="green"
        onCancel={(e) => {
            alert('Unable To Complete Payment')
            navigation.goBack()
        }}
        onSuccess={BookRoom}
        autoStart={true}
        currency="ZAR"
      />
    </View>
  );
}
export default Pay;
