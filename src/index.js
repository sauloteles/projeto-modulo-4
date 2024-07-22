import express from "express";  
import { userRouter } from './routes/user.router.js'
import { hemoRouter } from './routes/hemo.router.js'
import { historicRouter } from "./routes/historic.router.js";


const app = express()
const port = 4000

// permite nosso js entender json
app.use(express.json());

// dando acesso as nossas rotas
app.use(userRouter)
app.use(hemoRouter)
app.use(historicRouter)
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})