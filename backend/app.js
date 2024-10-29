import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'


const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())


// Route Imports
import checkRouter from './routes/check.route.js'
import userRouter from './routes/user.route.js'
import adminRouter from './routes/admin.route.js'


// Routes
app.use('/api/v1/check', checkRouter)


// User Routes
app.use('/api/v1/user', userRouter)


// Admin Routes
app.use('/api/v1/admin', adminRouter)



// app.get( '/' , (req, res) =>{
//     return res.json({
//         data: {name: "Whoopsie Daisy"}
//     })
// } )

export { app }