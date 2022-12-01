import { Response } from "express";

const handleHTTP = (res: Response, err: string) => {
    res.status(500).send({ err })
}

export { handleHTTP }