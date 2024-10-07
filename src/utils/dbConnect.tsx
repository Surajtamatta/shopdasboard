
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || 'your-mongodb-uri';


if(!MONGO_URI){
    throw new Error('Please define the MONGO_URI environment variable inside .env.local');

}

async function dbConnect() {
    if(mongoose.connection.readyState>=1){
        return;
    }
    return mongoose.connect(MONGO_URI,{

    })
}

export default dbConnect;