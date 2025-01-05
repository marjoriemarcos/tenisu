import { useEffect, useState } from "react";
import { PlayerCard } from "../molecules/PlayerCard";
import { Search } from "../molecules/Search";
import axios from 'axios';
import PlayerProps from '../types/PlayerProps'



function HomePage () {
    const [players, setPlayers] = useState<PlayerProps[]>([])
    console.log("🚀 ~ HomePage ~ players:", players)
    const fetchData = async () => {
        const { data } = await axios.get<PlayerProps[]>('http://localhost:5002/players')
        setPlayers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="home_page">
                <Search></Search>
                <div className="home_page-card">
                    {players.map((player: PlayerProps) => (
                        <PlayerCard key={player.id} player={player}></PlayerCard>
                    ))}
                </div>
        </div>

    )
}
export default HomePage