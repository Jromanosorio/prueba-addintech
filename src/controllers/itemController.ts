import { Request, Response } from "express"
import itemModel from "../models/itemModel"
import { handleHTTP } from "../utils/error"

const getItems = async (req: Request, res: Response) => {
    try {

        const itemList = await itemModel.find({})
        res.status(200).send({ data: itemList })

    } catch (error) {
        handleHTTP(res, 'ERROR_GETTING_ITEMS')
    }
}

const getItem = async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params
        const data = await itemModel.findOne({ _id: id })
        const response = data ? data : 'ITEM_NOT_FOUND'

        res.status(200).send({ data: response })

    } catch (error) {
        handleHTTP(res, 'ERROR_GETTING_ITEM')
    }
}

const saveItem = async (req: Request, res: Response) => {
    try {
        const { nombre, precio, descripcion } = req.body

        const createdItem = await itemModel.create({
            nombre,
            precio,
            descripcion
        })

        res.status(200).send({ data: createdItem })

    } catch (error) {
        console.log(error)
        handleHTTP(res, 'ERROR_SAVING_ITEM')
    }
}

const updateItem =  async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params
        const { nombre, precio, descripcion } = req.body
        const updateItem = await itemModel.findOneAndUpdate({ _id: id }, {
            nombre,
            precio,
            descripcion
        }, { new: true })

        res.status(200).send({ data: updateItem })
        
    } catch (error) {
        handleHTTP(res, 'ERROR_UPDATING_ITEMS')
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params
        const response = await itemModel.deleteOne({ _id: id })

        res.status(200).send({ data: response })

    } catch (error) {
        handleHTTP(res, 'ERROR_DELETING_ITEMS')
    }
}

export {
    getItems,
    getItem,
    saveItem,
    updateItem,
    deleteItem
}