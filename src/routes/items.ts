import { Router } from "express";
import { deleteItem, getItem, getItems, saveItem, updateItem } from "../controllers/itemController";
const routerItems = Router()

routerItems.get('/items', getItems)
routerItems.get('/items/:id', getItem)
routerItems.post('/items', saveItem)
routerItems.put('/items/:id', updateItem)
routerItems.delete('/items/:id', deleteItem)

export { routerItems }