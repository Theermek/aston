import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
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
  }),
})

export const {
  useGetAllCharactersQuery,
  useGetFilteredCharactersByNameQuery,
  useGetCharacterByIdQuery,
  useGetCharactersByIdQuery,
} = rickApi
