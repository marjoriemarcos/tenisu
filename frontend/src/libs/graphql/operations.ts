import { gql } from "@apollo/client";


export const GET_PLAYERS = gql`
query GetPlayers {
  getPlayers {
    id
    firstname
    lastname
    totalName
    shortname
    sex
    picture
    rank
    point
    weight
    height
    age
    last_match_scores
    country {
      code
      picture
    }
  }
}
`

export const GET_PLAYER_WITH_ID = gql`
query GetPlayerWithId($getPlayerWithIdId: String!) {
  getPlayerWithId(id: $getPlayerWithIdId) {
    id
    firstname
    lastname
    totalName
    shortname
    sex
    picture
    rank
    point
    weight
    height
    age
    last_match_scores
    country {
      code
      picture
    }
  }
}
`

export const GET_PLAYER_WITH_NAME = gql`
query GetPlayerWithSearchBar($needle: String) {
  getPlayerWithSearchBar(needle: $needle) {
    id
    firstname
    lastname
    totalName
    shortname
    sex
    picture
    rank
    point
    weight
    height
    age
    last_match_scores
    country {
      code
      picture
    }
  }
}
`

export const CREATE_COUNTRY = gql`
mutation CreateCountry($data: CountryInput!) {
  createCountry(data: $data) {
    id
    picture
    code
  }
}
`

export const CREATE_PLAYER = gql`
mutation CreatePlayer($data: PlayerInput!) {
  createPlayer(data: $data) {
    id,
    firstname
    shortname,
    sex,
    picture,
    rank,
    point,
    weight,
    height,
    age,
    last_match_scores,
    country {
      picture,
      code
    }
  }
}
`

export const GET_COUNTRIES = gql`
query GetCountries {
  getCountries {
    id
    picture
    code
  }
}
`


