import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import { dataSource } from "./config/db";
import { Player } from './entities/Player';
import { Country } from './entities/Country';


const app = express();
app.use(express.json());
app.use(cors());

const port = 5002;

app.get("/players", async (req, res) => {
    try {
        const players = await Player.find({relations: { country: true }})
        if (players.length === 0) {
         res.status(404).send('No players found');   
        } else {
            res.json(players);
        }
    } catch (err) {
        console.log("err", err)
         res.status(500).send(err);
    }
})

app.get("/players/:id", async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const player = await Player.findOne({
            relations: { country: true},
            where: {
                id: id
            }

        })
        if (!player) {
            res.status(404).send('No players found');
        } else {
            res.json(player)
        }
    } catch (err) {
         res.status(500).send(err)
    }
})

app.listen(port, async () => {
    await dataSource.initialize();
    console.log(`Exemple app listening on port ${port}`);
});