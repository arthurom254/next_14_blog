import mongoose from 'mongoose'
let connected = false
export default async function connectDb() {
    if(connected){
        console.log("Connected already!");
        return ;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,'')
        console.log("Connected!!!!")
        connected=true
    }catch(e){}
}
