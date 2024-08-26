require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const recipeRoute = require('./routes/recipeRoute')


//initiallization
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//default route
app.get('/',(req,res)=>{
    res.send("hello")
})
//using routes
app.use('/api/recipe',recipeRoute)
// app.use('/api/product',productRoute)
// app.use('/api/user',userRoute)
// app.use('/api/category',categoryRoute)
//server
app.listen(process.env.PORT || 5001)

//connection 
async function mongoConnection() {
    try { const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
     res.send("error",error.message)   
    }
}
mongoConnection()