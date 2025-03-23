import {useState } from "react";
import { PlayerCard } from "../molecules/PlayerCard";
import { Search } from "../molecules/Search";
import PlayerProps from '../types/PlayerProps'
import ReactPaginate from "react-paginate";
import { useGetPlayersQuery } from "../libs/graphql/generated/graphql-types";
import CreateCountry from "../molecules/CreateCountry";



function HomePage () {

    const { data, loading, error } = useGetPlayersQuery();

    const [playersOffSet, setPlayersOffSet] = useState(0);
    const [playersPerPage] = useState(3);

   const  numberOfPayers =  data?.getPlayers?.length || 0;

    const endOffset = playersOffSet + playersPerPage;
    const currentItems = data?.getPlayers.slice(playersOffSet, endOffset);       
    const pageCount = Math.ceil(numberOfPayers / playersPerPage);
    
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * playersPerPage) % numberOfPayers;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setPlayersOffSet(newOffset);
      };
    

    if (loading) {
        return <p>Loading...</p>
    }

    if (error || currentItems === undefined) {
        return <p>Something wrong...</p>
    }

    return (
        <div className="body_page">
            <div className="home_page">
                    <CreateCountry/>
                    <div className="home_page-card">
                        <Search></Search>
                        {currentItems?.map((player) => (
                            <PlayerCard key={player.id} player={player as PlayerProps }></PlayerCard>
                        ))}
                    </div>
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