import { Request, Response, Router } from "express";
const routerItems = Router()

routerItems.get('/items', (req: Request, res: Response) => {
    res.send({ data: "Items endpoint"})
})

routerItems.get('/items/:id', (req: Request, res: Response) => {
    
})

export { routerItems }