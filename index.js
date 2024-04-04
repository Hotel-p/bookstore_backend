import express, { response } from "express";
// import { PORT, mongoDBUrL } from './config.js'
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('hey there!')
});

app.use('/books', booksRoute);

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
        console.log('App is listening to port: ' + process.env.PORT);
    });
})
.catch((error) => {
    console.log(error);
});
