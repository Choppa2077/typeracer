import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface singelRace {
  racer_id: string;
  content: string;
  length: number;
  text_author: string;
  contributor_name: string;
  racer_name: string;
  avatar: string;
  id: string;
}

type singleRaceResponse = singelRace;

interface singleEndGetApiParams {
  wpm: number;
  accuracy: number;
  duration: number;
  id: string;
}

type singleEndResponse = singleEndGetApiParams;

export const singleRaceApi = createApi({
  reducerPath: 'singleRaceApi',
  tagTypes: ['singleRace'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getRaceData: build.query<singleRaceResponse, void>({
      query: () => 'single',
      providesTags: (result) =>
        result
          ? [
              { type: 'singleRace' as const, id: result.id },
              { type: 'singleRace', id: 'LIST' },
            ]
          : [{ type: 'singleRace', id: 'LIST' }],
    }),
    getEndData: build.query<singleEndResponse, void>({
      query: () => 'raceEnd',
      providesTags: (result) =>
        result
          ? [
              { type: 'singleRace' as const, id: result.id },
              { type: 'singleRace', id: 'LIST' },
            ]
          : [{ type: 'singleRace', id: 'LIST' }],
    }),
  }),
});

export const { useGetRaceDataQuery, useGetEndDataQuery } = singleRaceApi;
