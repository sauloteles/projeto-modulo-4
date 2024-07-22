import { Router } from "express";
import { getAllHistoric, addHistoric } from "../controllers/historic.controller.js";

const historicRouter = Router();

historicRouter.get("/historic",(req,res)=>{
    let getHistoric = getAllHistoric()
    res.status(200).json({getHistoric})
})

historicRouter.post("/historic", (req, res) => {
    const { name, phone, email, quatity } = req.body
    let newHistoric = addHistoric(name, phone, email, quatity)
    res.status(201).json({newHistoric})
})

export {historicRouter}