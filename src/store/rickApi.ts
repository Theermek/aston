import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
  }),
})

export const { useGetAllCharactersQuery, useGetFilteredCharactersByNameQuery, useGetCharacterByIdQuery } = rickApi
