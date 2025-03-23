import { useState, FormEvent } from "react"
import PlayerProps from "../types/PlayerProps"
import { LittlePlayerCard } from "./LittlePlayerCard";
import { useGetPlayerWithSearchBarQuery } from "../libs/graphql/generated/graphql-types";


export function Search () {
    const [ needle, setNeedle] = useState('')

    const { data, loading, error, refetch } = useGetPlayerWithSearchBarQuery({
       variables: { needle: ""},
       skip: !needle
});

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const handleChange = async (evt: FormEvent<HTMLInputElement>) => {
        const searchInput = evt.currentTarget.value;
        setNeedle(searchInput)

        if (searchInput) {
            await refetch({ needle: searchInput })
        }
    }


    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Something wrong...</p>
    }

    return (
        <div className="search_container">
            <form onSubmit={handleSubmit}>
                <input
                    className="search_container_input"
                    type="text"
                    id="player"
                    placeholder="Rechercher un joueur"
                    aria-label="Search bar" 
                    aria-describedby="Search a player"
                    onChange={handleChange}
                />
            </form>
            {data?.getPlayerWithSearchBar?.map((player: PlayerProps) => (
                <LittlePlayerCard key={player.id} player={player}></LittlePlayerCard>
            ))}
        </div>
    )
}