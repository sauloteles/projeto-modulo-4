import { Router } from "express";
import {getAllUnit} from "../controllers/hemo.controller.js";



const hemoRouter = Router()


hemoRouter.get("/hemo", (req, res) => {
    let getUnit = getAllUnit()
    res.status(200).json({getUnit})
})

export { hemoRouter }
