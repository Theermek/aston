import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  url: string
}

type Suggest = {
  id: number
  name: string
}

export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: builder => ({
    getAllCharacters: builder.query({
      query: () => 'character/',
    }),
    getFilteredCharactersByName: builder.query({
      query: (name: string) => `character/?name=${name}`,
    }),
    getCharacterById: builder.query({
      query: id => `character/${id}`,
    }),
    getCharactersById: builder.query({
      query: id => `character/${id}`,
      transformResponse: (response: Character[]) => {
        return Array.isArray(response) ? response : [response]
      },
    }),
    getSuggests: builder.query<Suggest[], string>({
      query: searchInput => `character?name=${searchInput}`,
      transformResponse: (response): Suggest[] => {
        const data = response as { results: { id: number; name: string }[] }
        return data.results.map(result => ({
          id: result.id,
          name: result.name,
        }))
      },
    }),
  }),
})

export const {
  useGetAllCharactersQuery,
  useGetFilteredCharactersByNameQuery,
  useGetCharacterByIdQuery,
  useGetCharactersByIdQuery,
  useGetSuggestsQuery,
} = rickApi
