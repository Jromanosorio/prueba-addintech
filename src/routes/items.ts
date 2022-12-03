import { Router } from "express";
import { deleteItem, getItem, getItems, saveItem, updateItem } from "../controllers/itemController";
import { checkSession } from "../middlewares/verifySession";
const routerItems = Router()

routerItems.get('/items', getItems)
routerItems.get('/items/:id', getItem)
routerItems.post('/items', checkSession, saveItem)
routerItems.put('/items/:id', checkSession, updateItem)
routerItems.delete('/items/:id', checkSession, deleteItem)

export { routerItems }