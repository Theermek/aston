import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: builder => ({
    getAllCharacters: builder.query({
      query: () => 'character/',
    }),
    searchCharactersByName: builder.query({
      query: (name: string) => `character/?name=${name}`,
    }),
  }),
})

export const { useGetAllCharactersQuery, useSearchCharactersByNameQuery } =
  rickApi
