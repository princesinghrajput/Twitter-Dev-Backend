import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";
import service from "./services/tweet-service.js";


import apiRoutes from './routes/index.js'

const app = express();

app.use('/api', apiRoutes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))





app.listen(3000, async () => {
    console.log("Server is running on port 8001");
    await connect();
    console.log("Mongo db connected");
    let ser = new service();
    await ser.create({
        content: "#Hello There #tweets",
    });


    
});
