import express from 'express';


const app = express();
app.use(express.json());

const port = 5001;

type Player = {
    id: number,
    firstname: string,
    lastname: string,
    shortname: string,
    sex: string,
    country: {
        picture: string,
        code: string,
    },
    picture: string,
    data: {
        rank: number,
        points: number,
        weight: number,
        height: number,
        age: number,
        last: []
    }
}

async function getJsonData(userId?: number): Promise<Player | undefined>  {
    try {
        const response = await fetch("https://data.latelier.co/training/tennis_stats/headtohead.json")
        
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données");
        }

        const data = await response.json()
     
        if (userId) {
            const userData = data.players.find((player: Player) => player.id === userId) 
            return userData;
        }
        return data;
    
        } catch (error) {
            console.error("Erreur dans getPlayerData:", error);
            return undefined;
    }
}

// home page
app.get("/", async (req, res) => { 
    const data = await getJsonData();
    console.log('data/', data)
    res.json(data);
});


// player
app.get("/player/:id", async (req, res) => {
    console.log('Hello players')
    const playerId = parseInt(req.params.id);
    try {
        console.log('playerId', playerId)

        const data = await getJsonData(playerId);
        console.log('data player', data);
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Joueur non trouvé"});
        }

    } catch (error) {
        res.status(500).json({ message: "Erreur de récupération des données", error});
    }
})


app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`);
});