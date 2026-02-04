import {Schema, model} from 'mongoose'
import IImages from '../interfaces/imagesInterface.js'



const imageSchema = new Schema<IImages>({
    icon:{type:String},
    tag:{type:String},
    picName:{type:String},
    images:{type:String,required:true},
})

const Images  = model<IImages>("Images",imageSchema)

export default Images