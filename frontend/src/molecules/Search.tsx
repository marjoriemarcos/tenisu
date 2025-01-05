

export function Search () {


    return (
        <div className="search_container">
            <input
                className="search_container_input"
                type="text"
                id="player"
                defaultValue="Rechercher un joueur"
                aria-label="Search bar" 
                aria-describedby="Search a player"
            />
        </div>
    )
}