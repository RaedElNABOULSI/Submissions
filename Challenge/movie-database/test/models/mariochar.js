const mongoose=require('mongoose')
const Schema=mongoose.Schema

//create schema and model

const MarioCharSchema=new Schema(
   [ { title: String, year: Number, rating: Number },
    { title: String, year: Number, rating: Number },
    { title: String, year: Number, rating: Number }
   ]
)
   

const MarioChar=mongoose.model('mariochar',MarioCharSchema)
module.exports=MarioChar