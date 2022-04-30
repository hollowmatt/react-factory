import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Messages from './dbMessages.js';
import Pusher from 'pusher';

//App Config
const app = express();
const port = process.env.PORT || 9000

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
const connection_url = "mongodb+srv://da-user:tkdRiPnprBxJHSs9@da-mern.ywsk4.mongodb.net/da-mern?retryWrites=true&w=majority";
mongoose.connect(connection_url, {});
const db = mongoose.connection;
const pusher = new Pusher({
    appId: "1403763",
    key: "33afcbde14eb9a4893f4",
    secret: "9224874ac7607f8b859d",
    cluster: "us2",
    useTLS: true
});
db.once("open", () => {
    console.log("DB Connected")
    const msgCollection = db.collection("messagingmessages")
    const changeStream = msgCollection.watch()
    changeStream.on('change', change => {
        console.log(change)
        if(change.operationType === "insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error trigerring Pusher')
        }
    })
});

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