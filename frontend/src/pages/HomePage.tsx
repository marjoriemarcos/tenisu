import { useEffect, useState } from "react";
import { PlayerCard } from "../molecules/PlayerCard";
import { Search } from "../molecules/Search";
import axios from 'axios';
import PlayerProps from '../types/PlayerProps'
import ReactPaginate from "react-paginate";



function HomePage () {
    const [players, setPlayers] = useState<PlayerProps[]>([])
    const [loading, setLoading] = useState(false);
    const [playersOffSet, setPlayersOffSet] = useState(0);
    const [playersPerPage] = useState(3);
    console.log("🚀 ~ HomePage ~ players:", players)

    const endOffset = playersOffSet + 4;

    const currentItems = players.slice(playersOffSet, endOffset);
    const pageCount = Math.ceil(players.length / playersPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * playersPerPage) % players.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setPlayersOffSet(newOffset);
      };
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get<PlayerProps[]>('http://localhost:5002/players')
                setPlayers(data)
                setLoading(false)
                
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="home_page">
                <Search></Search>
                <div className="home_page-card">
                    {currentItems.map((player: PlayerProps) => (
                        <PlayerCard key={player.id} player={player}></PlayerCard>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}

                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}

                    forcePage={playersOffSet}
                    onPageChange={handlePageClick}
                    pageCount={pageCount} 

                    marginPagesDisplayed={2} // Number of pages to show at the beginning and end
                    pageRangeDisplayed={3} // Number of pages to show around the current page
                />
        </div>

    )
}
export default HomePage