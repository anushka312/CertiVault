import express from 'express'


const app = express()

app.get( '/' , (req, res) =>{
    
    return res.json({
        data: {name: "Whoopsie Daisy"}
    })
} )

export { app }