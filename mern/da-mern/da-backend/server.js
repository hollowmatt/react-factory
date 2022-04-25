import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';


//App Config
const app = express();
const port = process.env.PORT || 8001;

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
const connection_url = "mongodb+srv://da-user:tkdRiPnprBxJHSs9@da-mern.ywsk4.mongodb.net/da-mern?retryWrites=true&w=majority";
mongoose.connect(connection_url, {});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));
app.post('/dating/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});
app.get('/dating/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));