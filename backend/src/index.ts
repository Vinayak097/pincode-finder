import express from 'express'
import type {Request} from 'express'
import type {Response} from 'express'
import  {banglore} from './db.ts'
import type {BangloreInterface} from './db.ts'
import cors from 'cors'
const app = express()
app.use(cors())
app.get('/health', (req: Request, res: Response) => {
    res.send('healthy')
})

app.get('/pincode/:id',(req:Request , res:Response)=>{
    console.log("req. recienved for pincode")
    
    const pincodeId= req.params.id
    if(!pincodeId){
        res.status(400).json({success:false,error:"pincode is required"})
        return;
    }
    const pincodeData  =  banglore.find((item:BangloreInterface) => item.pincode === pincodeId)
    if(!pincodeData){
        res.status(404).json({success:false,error:"pincode not found"})
        return;
    }
    res.status(200).json({success:true,data:pincodeData})
})

app.get('/area/:name',(req:Request , res:Response)=>{
    console.log("req. recieved for araa")
    const areaName= req.params.name
    if(!areaName){
        res.status(400).json({success:false,error:"area name is required"})
        return;
    }
    const areaData = banglore.find((item:BangloreInterface) => item.area === areaName)
    if(!areaData){
        res.status(404).json({success:false,error:"area not found"})
        return;
    }
    res.status(200).json({success:true,data:areaData}   )
})

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})

