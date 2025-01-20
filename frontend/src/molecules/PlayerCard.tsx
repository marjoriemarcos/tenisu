import { Link } from 'react-router-dom';
import  PlayerCardProps  from '../types/PlayerCardProps';

export const PlayerCard = ({ player }: PlayerCardProps) => {
console.log("🚀 ~ PlayerCard ~ player:", player)

    return (
        <Link className='playercard_container' to={`/players/${player.id}`}>
            <div className="playercard_img">
                <img src={player.picture} alt={`Picture of ${player.lastname} ${player.firstname}`} />
            </div>
            <div className="playercard_details">
                <h2 className="playercard_detail_title">{player.lastname} {player.firstname}</h2>
                <div className="playercard_detail_other">
                    <div className="playercard_detail_other_rank">                   
                        <h3>Rank</h3>
                        <span>#{player.rank}</span>
                    </div>
                    <div className="playercard_detail_other_points">
                        <h3>Points</h3>
                        <span>{player.point}</span>
                    </div>
                    <div className="playercard_detail_other_country">
                        <h3>Country</h3>
                        <span>{player.country.code}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}