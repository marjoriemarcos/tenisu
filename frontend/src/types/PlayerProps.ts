type PlayerProps = {
    id: string,
    firstname: string,
    lastname: string,
    shortname: string,
    sex: string,
    picture: string,
    rank: number,
    point: number,
    weight: number,
    height: number,
    age: number,
    last_match_scores: number
    country: {
        code: string,
        picture: string
    }
}

export default PlayerProps;

