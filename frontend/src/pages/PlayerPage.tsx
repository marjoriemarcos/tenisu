import { useEffect, useState } from "react";
import axios from 'axios';
import PlayerProps from '../types/PlayerProps'
import { useParams } from "react-router-dom";
import PlayerDetail from "../organism/PlayerDetail";



function PlayerPage () {
    const { playerId } = useParams()
    const [player, setPlayer] = useState<PlayerProps|null>(null)

    const fetchData = async () => {
        const { data } = await axios.get<PlayerProps>(`http://localhost:5002/players/${playerId}`)
        setPlayer(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!player) return <p>Something wrong</p>
    return (
        <div>
            <PlayerDetail {...player} ></PlayerDetail>
        </div>

    )
}

export default PlayerPage