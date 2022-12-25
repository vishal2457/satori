import express from "express";
import cors from "cors";
import modules from "./modules";
const app = express();

app
.use(express.json())
.use(express.urlencoded({ limit: "50mb", extended: true }))
.use(cors());


app.post('/_satori', (req, res) => {
    console.log(req.body, "make build here");
    console.log(process.cwd(), 'process cwd');
    
    
res.sendStatus(200);
});

(modules as any)(app);


export default app;
