import {Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    email:{
        type: String,
        unique: [true, "Email already exist "],
        required: [true, "email is required "]
    }
},{
        timestamps: true 
    }
);
const User = models.User || model('User', userSchema)
export default User