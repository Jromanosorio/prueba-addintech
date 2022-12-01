import { Schema, Types, model, Model } from "mongoose";
import { Item } from "../interfaces/item.interface";

const itemSchema = new Schema<Item>({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const itemModel = model('items', itemSchema)
export default itemModel