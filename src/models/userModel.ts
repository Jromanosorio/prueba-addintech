import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const userModel = model('users', userSchema)
export default userModel