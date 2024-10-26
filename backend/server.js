import dotenv from "dotenv"

import { app } from './app.js'
import connectDB from "./db/index.js"

dotenv.config() 

// Connect DB
connectDB()
.then( () => {
    app.listen(process.env.PORT || 3000, () => console.log('Server Listening At Port: ', process.env.PORT || 3000))
} )
.catch( (err) => console.log("MongoDB connection failed\n Error: ", err) )
