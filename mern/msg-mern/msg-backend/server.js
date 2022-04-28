import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Messages from './dbMessages.js';

//App Config
const app = express();
const port = process.env.PORT || 9000

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
const connection_url = "mongodb+srv://da-user:tkdRiPnprBxJHSs9@da-mern.ywsk4.mongodb.net/da-mern?retryWrites=true&w=majority";
mongoose.connect(connection_url, {});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("MSG API server"));

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on locahost: ${port}`));