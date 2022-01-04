import React from 'react';


// get location of hotels
class Info {
     info=[
         {
        id:'0', email: 'fenyane02@gmail.com',name:'Maria',surname:'Fenyane',username:'@fenyane02',img:require('../assets/users.jpeg')
     },
    
]
hotels=[{
     id:'0',hotelname:' Hotel Sandton Sun',image:require('../assets/sun.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,
},   {id:'1',hotelname:'Sandton Star Hotel',image:require('../assets/sandton.png'),review:'19 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'2',hotelname:'Palms Hotel',image:require('../assets/palm.png'),review:'200 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'3',hotelname:'Luxury Hotel',image:require('../assets/RHP.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'5',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'6',hotelname:'Protea Hotel',image:require('../assets/protea.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,},
]
results=[
     {
          id:'0',hotelname:' Hotel Sandton Sun',image:require('../assets/sun.png'),location:'Corner Alice Lane',price:'R2033',state:'Night',
     },   
       
]
pretoria =[{
     id:'0',hotelname:'Hotel @ Hatfield',image:require('../assets/pretoria.png'),review:'100 Reviews',latitude:-26.358055,longitude:27.398056,
},   {id:'1',hotelname:'RH Protea Hotel',image:require('../assets/hotel1.png'),review:'250 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'2',hotelname:'Maslow Hotel',image:require('../assets/maslow.png'),review:'20 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'3',hotelname:'Protea Luxury Hotel',image:require('../assets/lux.png'),review:'106 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),review:'96 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'5',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'30 Reviews',latitude:-26.358055,longitude:27.398056,},
]
jbh =[{
     id:'0',hotelname:'Signature Lux Hotel',image:require('../assets/lux.png'),review:'350 Reviews',latitude:-26.358055,longitude:27.398056,
},   {id:'1',hotelname:'Maslow Hotel',image:require('../assets/maslow.png'),review:'250 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'2',hotelname:'Palms Hotel',image:require('../assets/palm.png'),review:'20 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'3',hotelname:'Protea Luxury Hotel',image:require('../assets/lux.png'),review:'106 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),review:'96 Reviews',latitude:-26.358055,longitude:27.398056,},
     {id:'5',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'30 Reviews',latitude:-26.358055,longitude:27.398056,},
]
notify=[{
     id:'0',hotelname:'Signature Lux Hotel',image:require('../assets/lux.png'),message:'Your room is ready, you can go to the hotel to check in at the hotel.Please notify if you wish to cancel the booking on time'
},   {id:'1',hotelname:'Maslow Hotel',image:require('../assets/maslow.png'),message:'Your booking was successfully cancelled.You can check special offers....'},
     {id:'2',hotelname:'Signature Lux Hotel',image:require('../assets/lux.png'),message:'Payment Successful. Your booking is currently being processed'},
     {id:'3',hotelname:'Protea Luxury Hotel',image:require('../assets/lux.png'),message:'Special Deals this christmas holidays, book now before we reach our maximum'},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),message:'Check out date fast approaching, you can choose to extend you stay with us'},
     {id:'5',hotelname:'Montello ',image:require('../assets/SplashImage.png'),message:'Profile successfully updated'},
]
bookings=[{
     id:'0',location:'Lebowakgomo',rooms:'4',guests:'2'
}]
}
export default new Info();