import app from './server.js'
import mongodb from 'mongodb'
import HotelDAO from './Dao/hotelsDao.js'
import HotelGuestDAO from './Dao/hotelGuests.dao.js'
import HotelRoomDAO from './Dao/hotelRoom.dao.js'
import FacilityDAO from './Dao/hotelfacility.dao.js'
import UserDAO from './Dao/User.dao.js'
import ClientDao from './Dao/ClientUser.js'
import ReviewsDao from './Dao/ReviewsDao.js'
const Mongo = mongodb.MongoClient

Mongo.connect(
    process.env.Connect ,{
     maxPoolSize:50,
     wtimeoutMS:250,
     useNewUrlParser: true,
     useUnifiedTopology:true
 }  
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
}).then(async client=>{
    await FacilityDAO.injectDB(client)
    await HotelDAO.injectDB(client)
    await HotelGuestDAO.injectDB(client)
    await HotelRoomDAO.injectDB(client)
    await UserDAO.injectDB(client)
    await ClientDao.injectDB(client)
    await ReviewsDao.injectDB(client)
})


