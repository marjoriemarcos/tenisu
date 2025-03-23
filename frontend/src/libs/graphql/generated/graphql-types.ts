import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  id: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  players: Array<Player>;
};

export type CountryInput = {
  code: Scalars['String']['input'];
  picture: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCountry: Country;
  createPlayer: Player;
};


export type MutationCreateCountryArgs = {
  data: CountryInput;
};


export type MutationCreatePlayerArgs = {
  data: PlayerInput;
};

export type Player = {
  __typename?: 'Player';
  age: Scalars['Float']['output'];
  country: Country;
  firstname: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  last_match_scores: Scalars['Float']['output'];
  lastname: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  point: Scalars['Float']['output'];
  rank: Scalars['Float']['output'];
  sex: Scalars['String']['output'];
  shortname: Scalars['String']['output'];
  totalName: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

export type PlayerInput = {
  age: Scalars['Float']['input'];
  country: Scalars['ID']['input'];
  firstname: Scalars['String']['input'];
  height: Scalars['Float']['input'];
  last_match_scores: Scalars['Float']['input'];
  lastname: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  point: Scalars['Float']['input'];
  rank: Scalars['Float']['input'];
  sex: Scalars['String']['input'];
  shortname: Scalars['String']['input'];
  weight: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getCountries: Array<Country>;
  getCountryWithId: Country;
  getPlayerWithId: Player;
  getPlayerWithSearchBar: Array<Player>;
  getPlayers: Array<Player>;
};


export type QueryGetCountryWithIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPlayerWithIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPlayerWithSearchBarArgs = {
  needle?: InputMaybe<Scalars['String']['input']>;
};

export type GetPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayersQuery = { __typename?: 'Query', getPlayers: Array<{ __typename?: 'Player', id: string, firstname: string, lastname: string, totalName: string, shortname: string, sex: string, picture: string, rank: number, point: number, weight: number, height: number, age: number, last_match_scores: number, country: { __typename?: 'Country', code: string, picture: string } }> };

export type GetPlayerWithIdQueryVariables = Exact<{
  getPlayerWithIdId: Scalars['String']['input'];
}>;


export type GetPlayerWithIdQuery = { __typename?: 'Query', getPlayerWithId: { __typename?: 'Player', id: string, firstname: string, lastname: string, totalName: string, shortname: string, sex: string, picture: string, rank: number, point: number, weight: number, height: number, age: number, last_match_scores: number, country: { __typename?: 'Country', code: string, picture: string } } };

export type GetPlayerWithSearchBarQueryVariables = Exact<{
  needle?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPlayerWithSearchBarQuery = { __typename?: 'Query', getPlayerWithSearchBar: Array<{ __typename?: 'Player', id: string, firstname: string, lastname: string, totalName: string, shortname: string, sex: string, picture: string, rank: number, point: number, weight: number, height: number, age: number, last_match_scores: number, country: { __typename?: 'Country', code: string, picture: string } }> };

export type CreateCountryMutationVariables = Exact<{
  data: CountryInput;
}>;


export type CreateCountryMutation = { __typename?: 'Mutation', createCountry: { __typename?: 'Country', id: string, picture: string, code: string } };

export type CreatePlayerMutationVariables = Exact<{
  data: PlayerInput;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename?: 'Player', id: string, firstname: string, shortname: string, sex: string, picture: string, rank: number, point: number, weight: number, height: number, age: number, last_match_scores: number, country: { __typename?: 'Country', picture: string, code: string } } };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', getCountries: Array<{ __typename?: 'Country', id: string, picture: string, code: string }> };


export const GetPlayersDocument = gql`
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
    `;

/**
 * __useGetPlayersQuery__
 *
 * To run a query within a React component, call `useGetPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
      }
export function useGetPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
        }
export function useGetPlayersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
        }
export type GetPlayersQueryHookResult = ReturnType<typeof useGetPlayersQuery>;
export type GetPlayersLazyQueryHookResult = ReturnType<typeof useGetPlayersLazyQuery>;
export type GetPlayersSuspenseQueryHookResult = ReturnType<typeof useGetPlayersSuspenseQuery>;
export type GetPlayersQueryResult = Apollo.QueryResult<GetPlayersQuery, GetPlayersQueryVariables>;
export const GetPlayerWithIdDocument = gql`
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
    `;

/**
 * __useGetPlayerWithIdQuery__
 *
 * To run a query within a React component, call `useGetPlayerWithIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerWithIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerWithIdQuery({
 *   variables: {
 *      getPlayerWithIdId: // value for 'getPlayerWithIdId'
 *   },
 * });
 */
export function useGetPlayerWithIdQuery(baseOptions: Apollo.QueryHookOptions<GetPlayerWithIdQuery, GetPlayerWithIdQueryVariables> & ({ variables: GetPlayerWithIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerWithIdQuery, GetPlayerWithIdQueryVariables>(GetPlayerWithIdDocument, options);
      }
export function useGetPlayerWithIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerWithIdQuery, GetPlayerWithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerWithIdQuery, GetPlayerWithIdQueryVariables>(GetPlayerWithIdDocument, options);
        }
export function useGetPlayerWithIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPlayerWithIdQuery, GetPlayerWithIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlayerWithIdQuery, GetPlayerWithIdQueryVariables>(GetPlayerWithIdDocument, options);
        }
export type GetPlayerWithIdQueryHookResult = ReturnType<typeof useGetPlayerWithIdQuery>;
export type GetPlayerWithIdLazyQueryHookResult = ReturnType<typeof useGetPlayerWithIdLazyQuery>;
export type GetPlayerWithIdSuspenseQueryHookResult = ReturnType<typeof useGetPlayerWithIdSuspenseQuery>;
export type GetPlayerWithIdQueryResult = Apollo.QueryResult<GetPlayerWithIdQuery, GetPlayerWithIdQueryVariables>;
export const GetPlayerWithSearchBarDocument = gql`
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
    `;

/**
 * __useGetPlayerWithSearchBarQuery__
 *
 * To run a query within a React component, call `useGetPlayerWithSearchBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerWithSearchBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerWithSearchBarQuery({
 *   variables: {
 *      needle: // value for 'needle'
 *   },
 * });
 */
export function useGetPlayerWithSearchBarQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayerWithSearchBarQuery, GetPlayerWithSearchBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerWithSearchBarQuery, GetPlayerWithSearchBarQueryVariables>(GetPlayerWithSearchBarDocument, options);
      }
export function useGetPlayerWithSearchBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerWithSearchBarQuery, GetPlayerWithSearchBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerWithSearchBarQuery, GetPlayerWithSearchBarQueryVariables>(GetPlayerWithSearchBarDocument, options);
        }
export function useGetPlayerWithSearchBarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPlayerWithSearchBarQuery, GetPlayerWithSearchBarQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlayerWithSearchBarQuery, GetPlayerWithSearchBarQueryVariables>(GetPlayerWithSearchBarDocument, options);
        }
export type GetPlayerWithSearchBarQueryHookResult = ReturnType<typeof useGetPlayerWithSearchBarQuery>;
export type GetPlayerWithSearchBarLazyQueryHookResult = ReturnType<typeof useGetPlayerWithSearchBarLazyQuery>;
export type GetPlayerWithSearchBarSuspenseQueryHookResult = ReturnType<typeof useGetPlayerWithSearchBarSuspenseQuery>;
export type GetPlayerWithSearchBarQueryResult = Apollo.QueryResult<GetPlayerWithSearchBarQuery, GetPlayerWithSearchBarQueryVariables>;
export const CreateCountryDocument = gql`
    mutation CreateCountry($data: CountryInput!) {
  createCountry(data: $data) {
    id
    picture
    code
  }
}
    `;
export type CreateCountryMutationFn = Apollo.MutationFunction<CreateCountryMutation, CreateCountryMutationVariables>;

/**
 * __useCreateCountryMutation__
 *
 * To run a mutation, you first call `useCreateCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCountryMutation, { data, loading, error }] = useCreateCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCountryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCountryMutation, CreateCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCountryMutation, CreateCountryMutationVariables>(CreateCountryDocument, options);
      }
export type CreateCountryMutationHookResult = ReturnType<typeof useCreateCountryMutation>;
export type CreateCountryMutationResult = Apollo.MutationResult<CreateCountryMutation>;
export type CreateCountryMutationOptions = Apollo.BaseMutationOptions<CreateCountryMutation, CreateCountryMutationVariables>;
export const CreatePlayerDocument = gql`
    mutation CreatePlayer($data: PlayerInput!) {
  createPlayer(data: $data) {
    id
    firstname
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
      picture
      code
    }
  }
}
    `;
export type CreatePlayerMutationFn = Apollo.MutationFunction<CreatePlayerMutation, CreatePlayerMutationVariables>;

/**
 * __useCreatePlayerMutation__
 *
 * To run a mutation, you first call `useCreatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlayerMutation, { data, loading, error }] = useCreatePlayerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlayerMutation, CreatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument, options);
      }
export type CreatePlayerMutationHookResult = ReturnType<typeof useCreatePlayerMutation>;
export type CreatePlayerMutationResult = Apollo.MutationResult<CreatePlayerMutation>;
export type CreatePlayerMutationOptions = Apollo.BaseMutationOptions<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const GetCountriesDocument = gql`
    query GetCountries {
  getCountries {
    id
    picture
    code
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export function useGetCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesSuspenseQueryHookResult = ReturnType<typeof useGetCountriesSuspenseQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;