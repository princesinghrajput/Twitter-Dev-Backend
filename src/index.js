import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";

import apiRoutes from './routes/index.js';

const app = express();

app.use('/api', apiRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

import service from "./services/tweet-service.js";

app.listen(3001, async () => {
    console.log("Server is running on port 3001");
    await connect();
    console.log("Mongo db connected");
    let ser = new service();
    await ser.create({
        content: "Now I can pass #TWEET in lowercase againI #HASHtags can #DO in #UpperCASE #twEET",
    });
});
