import PlayerProps from "../types/PlayerProps";



export default function PlayerDetail (props: PlayerProps) {
    return (
        <div className="container">
            <img className="image-detail" src={props.picture} alt={`Picture of ${props.firstname} ${props.lastname}`} />
            <div className="detail-container">
                <div className="detail-title">
                    <div className="title">
                        <h1>{props.firstname} <br /><span>{props.lastname}</span></h1>
                    </div>
                    <div className="country">
                        <img src={props.country.picture} alt={`Flag of ${props.country.picture}`} />
                        <span>SRB</span>
                    </div>
                </div>
                <div className='detail-content'>
                    <div className="content-main">
                        <div className="content-first">
                            <div className="content-detail">
                                <h3>RANK</h3>
                                <p>{props.rank}</p>
                            </div>
                            <div className="content-detail">
                                <h3>BIRTHDAY</h3>
                                <p>{props.age}</p>
                            </div>
                            <div className="content-detail">
                                <h3>WEIGHT</h3>
                                <p>{props.weight} kg</p>
                            </div>

                        </div>
                        <div className="content-second">
                            <div className="content-detail">
                                <h3>POINTS</h3>
                                <p>{props.point}</p>
                            </div>
                            <div className="content-detail">
                                <h3>AGE</h3>
                                <p>{props.age}</p>
                            </div>
                            <div className="content-detail">
                                <h3>HEIGHT</h3>
                                <p>{props.height} cm</p>
                            </div>

                        </div>
                        <div className="content-third">
                            <div className="content-detail">
                                <h3>COUNTRY</h3>
                                <p>Serbie</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-side">
                        <div className="content-career">
                            <h3>CAREER TITLES</h3>
                            <div className="career-detail">
                                <h4>2021 - 4</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="career-detail">
                                <h4>2021 - 4</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}