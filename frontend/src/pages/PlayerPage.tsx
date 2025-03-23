import PlayerProps from '../types/PlayerProps'
import { useParams } from "react-router-dom";
import PlayerDetail from "../organism/PlayerDetail";
import { useGetPlayerWithIdQuery } from "../libs/graphql/generated/graphql-types";



function PlayerPage () {
    const { playerId } = useParams()
     const { data, loading, error } = useGetPlayerWithIdQuery({
       variables: {
        getPlayerWithIdId: `${playerId}`
       },
     });

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Something wrong...</p>
    }
    return (
        <div>
            <PlayerDetail {...data?.getPlayerWithId as PlayerProps} ></PlayerDetail>
        </div>

    )
}

export default PlayerPage