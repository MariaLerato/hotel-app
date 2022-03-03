import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectID

let reviews

export default class ReviewsDao{
    static async injectDB(conn){
        if(reviews){
            return
        }
        try{
            reviews = await conn.db(process.env.Database).collection('reviews')

        }catch (e){
            console.error(`Unable to establish collection handles in reviewsDAO:${e}`)
        }
    }
    static async addReview(hotelId,user,review,date){
        try{
            const reviewDoc = {
                name:user.name,
                user_id:user._id,
                date:date,
                text:review,
                hotelId:ObjectId(hotelId)
            }
            console.log('reviews',reviewDoc)
            return await reviews.insertOne(reviewDoc)
        }catch(e){
            console.error(`Unable to post review :${e}`)
            return {error:e}
        }
    }
    static async updateReview(reviewId,userId,text,date){
        try{
            const updateResponse = await reviews.updateOne(
                {user_id:userId,_id:ObjectId(reviewId)},
                {$set:{text:text,date:date}}
            )
            console.log('-------------')
            return updateResponse
            
        }catch(e){
            console.error(`Unable to update review:${e}`)
            return{error:e}
        }
    }
    static async deleteReview(reviewId,userId){
       try{
           const deleteResponse = await reviews.deleteOne({
               _id:ObjectId(reviewId),
               user_id:userId
           })
           return deleteResponse
       } catch(e){
           console.error(`Unable to delete review:${e}`)
           return {error:e}
       }
    }
}