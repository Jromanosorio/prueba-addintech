import "dotenv/config";
import express from "express";
import cors from "cors";
import { routerItems } from "./routes/items";
import { routerUsers } from "./routes/users";
import ConnectDB from "./config/mongo";

const app = express()

const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

ConnectDB()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err: Error) => console.log("Ha ocurrido un erro de conexion", err))

// items routes
app.use('/api', routerItems)

// users routes
app.use('/auth', routerUsers)

app.listen(PORT, () => console.log("Running on PORT: ", PORT))