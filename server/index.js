import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/database.js';

import routesApiVer1  from "./api/v1/routes/index.route.js";
import routesApiVer2 from './api/v2/routes/index.route.js';

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

app.get("/", (req, res) => {
    res.json({
        message: "Server is running " + process.env.PORT
    })
})

routesApiVer2(app);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running ", process.env.PORT)
    })
})