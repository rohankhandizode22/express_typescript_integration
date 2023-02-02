import express ,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/",(req:Request,res:Response)=>{
    res.send("Express Typescript Server")
})

app.listen(PORT,()=>{
    console.log(`Server Work on ${PORT}`)
    
})