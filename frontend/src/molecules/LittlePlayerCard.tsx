import { Link } from 'react-router-dom';
import  PlayerCardProps  from '../types/PlayerCardProps';

export const LittlePlayerCard = ({ player }: PlayerCardProps) => {

    return (
        <Link className='littleplayercard_container' to={`/players/${player.id}`}>
            <div className="littleplayercard_img">
                <img src={player.picture} alt={`Picture of ${player.lastname} ${player.firstname}`} />
            </div>
            <div className="littleplayercard_details">
                <p className="littleplayercard_detail_text">{player.firstname} {player.lastname} </p>
            </div>
        </Link>
    )
}