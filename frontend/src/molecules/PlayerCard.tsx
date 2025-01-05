import  PlayerCardProps  from '../types/PlayerCardProps';

export const PlayerCard = ({ player }: PlayerCardProps) => {
console.log("🚀 ~ PlayerCard ~ player:", player)

    return (
        <div className="playercarde_container">
            <div className="playercarde_img">
                <img src={player.picture} alt={`Picture of ${player.lastname} ${player.firstname}`} />
            </div>
            <div className="playercarde_details">
                <h2 className="playercarde_detail_title">{player.lastname} {player.firstname}</h2>
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
                        <span>Suisse</span>
                    </div>
                </div>
            </div>
        </div>
    )
}