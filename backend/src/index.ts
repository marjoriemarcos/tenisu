import express from 'express';
import { Player } from './entities/Player';


const app = express();
app.use(express.json());

const port = 5001;

app.get("/players", async (_req, res) => {

    try {
        const players = await Player.find()
        if (players.length === 0) {
            return res.status(404).send('No players found');   
        }
        return res.json(players);
    } catch (err) {
        return res.status(500).send(err);
    }
})

app.get("/players/:id", async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const player = await Player.findOneBy({id})
        if (!player) return res.status(404).send('No players found');

        return res.json(player)

    } catch (err) {
        return res.status(500).send(err)
    }
})

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`);
});