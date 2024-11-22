import * as express from "express";
import * as cors from "cors";
import * as dotenv from 'dotenv';
import routes from "./routes/index";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',routes)

app.use((req,res,next)=>{
    res.status(400).send("404 - Page not found")
})
app.use((err, req, res, next)=>{
    console.log("error", err)
    res.status(500).json({error: "Internal Server Error"})
})
app.get("/api", (req,res)=>{
    res.status(200).send("Welcome to Celeb APIs")
})
app.listen(process.env.PORT, ()=>{
    console.log("server is running on port:", process.env.PORT)
})

